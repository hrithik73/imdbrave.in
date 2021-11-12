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
    <div className="flex-col">
      <div className="flex justify-between">
        <button onClick={() => scroll(-100)}>
          <BiLeftArrow size={20} />
        </button>
        <button onClick={() => scroll(400)}>
          <BiRightArrow size={20} />
        </button>
      </div>
      <div className="flex w-full overflow-x-scroll" ref={ref}>
        {data.map((item) => {
          return <RecentSongCard item={item} key={item.imgURL} />
        })}
        <div className="flex flex-col p-3">
          <div className="bg-white rounded-lg bg-cover h-48 w-48 shadow-lg overflow-hidden flex-1 flex flex-wrap justify-center items-center">
            <Link href="/songs">
              <a className="text-blue-400 text-xl self-center font-bold">
                More ...
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentSongs
