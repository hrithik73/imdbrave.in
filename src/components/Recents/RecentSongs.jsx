import React, { useRef, useState, useEffect } from "react"
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
import Link from "next/link"

import { ReadDB } from "../../utility/Firebase"
import RecentSongCard from "./RecentSongCard"

const RecentSongs = () => {
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
          return <RecentSongCard item={item} key={item.imgURL} />
        })}
        <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-wrap justify-center items-center">
            <Link href="/songs" className="text-xl font-bold">
              More at SONG Section...
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentSongs
