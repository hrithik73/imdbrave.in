import React from "react"
import { FaPlay } from "react-icons/fa"
import Image from "next/image"

const SongCard = ({ item }) => {
  return (
    <div className="mx-5 my-10 flex-wrap">
      <div className="flex  max-w-xs shadow-lg rounded-lg overflow-hidden">
        <Image
          height={200}
          width={200}
          src={item.imgURL}
          // layout="responsive"
          objectFit="cover"
          // loader={ <h2>Loading</h2>}
          // className="w-1/3 h-1/3 flex bg-contain bg-center rounded-lg bg-local px-1 py-4 "
        />
        <div className="w-4/6 flex flex-wrap align-center p-4 ">
          <h1 className="text-gray-900 font-bold overflow-hidden truncate text-xl flex sm:mr-3">
            {item.title}
          </h1>

          <p className="mt-2 text-gray-600 text-sm truncate">
            Artist(s):{item.artist}
          </p>
          <div className="flex item-center justify-between mt-3">
            <button
              className="flex mx-3 px-3 py-2 bg-red-600 text-white text-xs font-bold uppercase rounded"
              onClick={() => {
                window.open(item.link)
              }}
            >
              Play
              <FaPlay className="ml-1 self-center" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SongCard
