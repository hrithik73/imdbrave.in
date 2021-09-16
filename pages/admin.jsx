import React, { useState } from "react"

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { collection, addDoc } from "firebase/firestore"

import { storage, db } from "../src/utility/Firebase"
import ProgressBar from "../src/components/ProgressBar"

const Admin = () => {
  const [image, setImage] = useState()
  const [imgURL, setImgURL] = useState()
  const [progress, setProgress] = useState()
  const [done, setDone] = useState(false)
  const uploadImg = (e) => {
    e.preventDefault()
    console.log("inside uploadFunction")
    const metadata = {
      contentType: "image/jpeg",
    }
    //
    const storageRef = ref(storage, "merch/" + image.name)
    const uploadTask = uploadBytesResumable(storageRef, image, metadata)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(Math.floor(progress))
        console.log("Upload is " + progress + "% done")

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused")
            break
          case "running":
            console.log("Upload is running")
            break
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break
          case "storage/canceled":
            // User canceled the upload
            break
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL)
          setImgURL(downloadURL)
        })
      }
    )
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const title = e.target.elements.title?.value
    const price = e.target.elements.price?.value
    const link = e.target.elements.link?.value
    const discription = e.target.elements.discription?.value

    //Cloud FireStore

    try {
      const docRef = await addDoc(collection(db, "merchData"), {
        //
        title: title,
        price: price,
        discription: discription,
        link: link,
        imgURL: imgURL,
      })
      console.log("Document written with ID: ", docRef.id)
      setDone(true)
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Upload an Item 🛒
        </h1>

        <form onSubmit={uploadImg}>
          <label htmlFor="image">Image</label>
          <div className="flex justify-center items-center ">
            <input
              type="file"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out `}
              id="image"
              placeholder="image"
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button className="bg-red-500 hover:bg-red-700 text-black font-bold my-2 mx-4 py-2 px-4 rounded">
              📤
            </button>
          </div>
        </form>
        {progress ? <ProgressBar progress={progress} color="#ff655b" /> : null}
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="title"
              placeholder="Title"
              required
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="price"
              placeholder="Price"
              required
            />
          </div>
          <div>
            <label>Discription</label>
            <input
              type="text"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="discription"
              placeholder="Discription"
              required
            />
          </div>
          <div>
            <label>Link</label>
            <input
              type="url"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="link"
              placeholder="Link"
              required
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-green py-2 px-4 text-sm text-dark rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Upload
            </button>
          </div>
        </form>
        {done ? <ProgressBar progress={100} color="#135ffb" /> : null}
      </div>
    </div>
  )
}

export default Admin
