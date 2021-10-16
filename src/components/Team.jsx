import React from "react"

import { team } from "../data/data"

const Team = () => {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-gray-900">
          Special Mention
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 self-center ">
        <div className="w-full bg-white rounded-lg p-5 flex flex-col justify-center items-center">
          <div className="mb-4">
            <img
              className="object-center object-cover rounded-full h-28 w-28"
              src="other/hrithik.webp"
              alt="photo of development team lead"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">
              {team.developer.name}
            </p>
            <p className="text-base text-gray-400 font-normal">
              {team.developer.designation}
            </p>
          </div>
          <div className="flex gap-1">
            <img
              src="social/fb.svg"
              className="h-8 cursor-pointer"
              onClick={() => window.open(team.developer.facebook)}
            />
            <img
              src="social/insta.svg"
              className="h-8 cursor-pointer"
              onClick={() => window.open(team.developer.insta)}
            />
            <img
              src="social/twitter.svg"
              className="h-9 w-9 cursor-pointer"
              onClick={() => window.open(team.developer.twitter)}
            />
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-5 flex flex-col justify-center items-center">
          <div className="">
            <img
              className="object-center object-cover rounded-full h-28 w-28"
              src={team.management.img}
              alt="photo of management team lead"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">
              {team.management.name}
            </p>
            <p className="text-base text-gray-400 font-normal">
              {team.management.designation}
            </p>
          </div>
          <div className="flex gap-1">
            <img
              src="social/fb.svg"
              className="h-8 cursor-pointer"
              onClick={() => window.open(team.management.facebook)}
            />
            <img
              src="social/insta.svg"
              className="h-8 cursor-pointer"
              onClick={() => window.open(team.management.insta)}
            />
            <img
              src="social/twitter.svg"
              className="h-9 w-9 cursor-pointer"
              onClick={() => window.open(team.management.twitter)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Team
