import React, { useState, useEffect } from "react"
import Header from "../src/components/Header"
import SongCard from "../src/components/SongCard"

import { collection, getDocs, orderBy } from "firebase/firestore"

import { db } from "../src/utility/Firebase"
import Footer from "../src/components/Footer"

const recents = () => {
  const [data, setdata] = useState([])
  console.log(data)

  const fetchData = async () => {
    const querySnapshot = await getDocs(
      collection(db, "songs"),
      orderBy("timeInterval", "asc")
    )
    const songData = []
    querySnapshot.forEach((doc) => {
      songData.push(doc.data())
      // console.log(merchData)
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
