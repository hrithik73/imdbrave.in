import React, { useState, useEffect } from "react"
import Header from "../src/components/Header"
import SongCard from "../src/components/SongCard"

import { collection, getDocs, query, orderBy } from "firebase/firestore"

import { db } from "../src/utility/Firebase"
import Footer from "../src/components/Footer"

const recents = () => {
  const [data, setdata] = useState([])
  // console.log(data)

  const fetchData = async () => {
    const q = query(collection(db, "songs"), orderBy("timeInterval", "desc"))

    const querySnapshot = await getDocs(q)
    // orderBy("timeInterval", "desc")

    const songData = []
    querySnapshot.forEach((doc) => {
      songData.push(doc.data())
    })
    setdata(songData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!data) {
    return null
  }
  return (
    <div>
      <Header current="recents" />
      <div className="lg:flex flex-wrap justify-center align-center flex-1">
        {data.map((item) => {
          return <SongCard item={item} key={item.imgURL} />
        })}
      </div>
      <Footer />
    </div>
  )
}
export default recents
