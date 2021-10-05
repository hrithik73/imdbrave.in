import React from "react"

const Card = ({ text, link, imgPath }) => {
  return (
    <div
      className="border-2 border-red-200 max-w-md bg-white py-2 my-2 lg:py-2 lg:mx-2 sm:py-4 sm:px-10 
      shadow-lg rounded-lg lg:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110 cursor-pointer"
      onClick={() => window.open(link)}
    >
      <div className="flex bg-contain justify-center md:justify-end">
        <img className="w-full h-21 rounded-lg" src={imgPath} />
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
