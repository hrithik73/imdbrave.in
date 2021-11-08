import React, { useState, useEffect } from "react"
import Header from "../src/components/Header"
import SongCard from "../src/components/SongCard"

import { ReadDB } from "../src/utility/Firebase"
import Footer from "../src/components/Footer"
import LoadingScreen from "../src/components/LoadingScreen"

const recents = () => {
  const [data, setData] = useState([])

  useEffect(async () => {
    const data = await ReadDB(null, "songs")
    // console.log(data)
    setData(data)
  }, [])

  if (!data) {
    return <LoadingScreen />
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
