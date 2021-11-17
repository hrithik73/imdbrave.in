import React, { useEffect, useState } from "react"
// import Image from "next/image"

import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import { socialData, team } from "../data/data"
import SocialButton from "./SocialButton"

const Footer = () => {
  // const [ytData, setTtData] = useState({ title: "", thumbnail: "", link: "" })

  return (
    <>
      <div className="flex sm:flex-row flex-wrap-reverse rounded  justify-around bg-gradient-to-tr from-gray-700 via-gray-900 to-black mx-2 px-3 py-5 my-5">
        <div className="flex row gap-3 w-full justify-around flex-wrap-reverse h-full">
          <div className="flex-row sm:w-1/4 justify-center h-1/3 my-auto border-2 border-red-200 max-w-sm bg-white py-2 px-6 sm:py-4 shadow-lg rounded-lg">
            <p className="font-bold  text-lg">Contact Management</p>
            <a
              className="flex gap-x-2 text-blue-700"
              href="mailto:talha7883@gmail.com"
            >
              <MdEmail color="black" className="self-center" />
              talha7883@gmail.com
            </a>
            <p className="flex gap-x-2 ">
              <FaPhoneAlt className="self-center" />
              +91 9097060863
            </p>
          </div>

          <div className="self-center">
            <h2 className="text-center text-white font-bold">CONNECT ME AT</h2>
            <div className="flex items-center">
              <SocialButton href={socialData.facebook} path="/social/fb.svg" />
              <SocialButton
                href={socialData.instagram}
                path="/social/insta.svg"
                height={35}
              />
              <SocialButton
                href={socialData.mail}
                path="/social/mail.svg"
                height={25}
              />
              <SocialButton
                href={socialData.youtube}
                path="/social/youtube.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-black-200 pb-1 cursor-pointer">
        <a
          onClick={() => {
            window.open(team.developer.insta)
          }}
          className="text-sm"
        >
          © 2021 | Coded by Hrithik
        </a>
      </div>
    </>
  )
}
export default Footer
