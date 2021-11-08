import React, { useRef, useState, useEffect } from "react"
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"

import { ReadDB } from "../../utility/Firebase"
import RecentSongCard from "./RecentSongCard"

const RecentCard = () => {
  const ref = useRef(null)
  const [data, setData] = useState([])

  useEffect(async () => {
    const data = await ReadDB(5, "songs")
    // console.log(data)
    setData(data)
  }, [])

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset
  }

  return (
    <>
      <div className="flex justify-between">
        <button onClick={() => scroll(-100)}>
          <BiLeftArrow size={20} />
        </button>
        <button onClick={() => scroll(400)}>
          <BiRightArrow size={20} />
        </button>
      </div>
      <div className="flex overflow-x-scroll" ref={ref}>
        {data.map((item) => {
          return <RecentSongCard item={item} />
        })}
      </div>
    </>
  )
}

export default RecentCard
