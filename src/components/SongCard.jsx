import React from "react"
import { FaPlay } from "react-icons/fa"

const SongCard = ({ item }) => {
  return (
    <div className="mx-5 my-10">
      <div className="flex max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-1/3 h-1/3 flex bg-contain bg-center rounded-lg bg-local px-1 py-4"
          src={item.imgURL}
        />
        <div className="flex-row align-center p-4 ">
          <h1 className="text-gray-900 font-bold text-xl mr-2 pr-4 flex sm:mr-3">
            {item.title}
          </h1>
          <p className="text-gray-400 font-semibold	text-sm">
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
