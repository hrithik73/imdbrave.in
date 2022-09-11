import React from "react"
import Image from "next/image"

const Card = ({ text, link, imgPath }) => {
  return (
    <div
      className="border-2  flex-shrink-0 border-red-200 max-w-xs lg:w-30 p-2 m-2 md:py-2 md:mx-2 lg:py-2 lg:mx-2  sm:px-4 xs:w-2/6
      shadow-lg rounded-lg lg:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110 cursor-pointer"
      onClick={() => window.open(link)}
    >
      <div className="flex bg-contain justify-center">
        <Image
          width={400}
          height={400}
          className="w-full h-21 rounded-lg sm:p-2"
          src={imgPath}
        />
      </div>
      <div className="flex justify-center mb-6">
        <p className="lg:mt-2 sm:text-lg text-gray-600 font-bold text-center">
          {text}
        </p>
      </div>
    </div>
  )
}

export default Card
