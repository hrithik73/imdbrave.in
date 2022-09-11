import React, { useState, useEffect } from "react"
import SongCard from "../src/components/SongCard"

import { ReadDB } from "../src/utility/Firebase"
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
      <div className="lg:flex flex flex-wrap justify-center align-center ">
        {data.map((item) => {
          return <SongCard item={item} key={item.imgURL} />
        })}
      </div>
    </div>
  )
}
export default recents
