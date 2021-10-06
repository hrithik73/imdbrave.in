import React from "react"

import { team } from "../data/data"

import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <div className="flex  justify-center px-8 py-3 my-5">
        <div className="self-center border-2 border-red-200 max-w-md bg-white py-2 px-6 sm:py-4 sm:px-10 shadow-lg rounded-lg">
          <p>Contact Me at </p>
          <a
            className="flex gap-x-2 text-blue-700"
            href="mailto:dbraveofficial@gmail.com"
          >
            <MdEmail color="black" className="self-center" />
            dbraveofficial@gmail.com
          </a>
        </div>
      </div>
      <h2 className="text-center font-bold">OR</h2>
      <div className="flex justify-center pb-10 py-3 my-5">
        <div className="flex-row border-2 border-red-200 max-w-md bg-white py-2 px-6 sm:py-4 sm:px-10 shadow-lg rounded-lg">
          <p>Contact Management</p>
          <a
            className="flex gap-x-2 text-blue-700"
            href="mailto:talha7883@gmail.com"
          >
            {" "}
            <MdEmail color="black" className="self-center" />
            talha7883@gmail.com
          </a>
          <p className="flex gap-x-2 ">
            <FaPhoneAlt className="self-center" /> +91 9097060863
          </p>
        </div>
      </div>
      <div className="flex justify-center border-black-200 pb-1 cursor-pointer">
        <a
          onClick={() => {
            window.open(team.developer.insta)
          }}
          className="text-sm"
        >
          {" "}
          © 2021 | Coded with ❤️ by Hrithik{" "}
        </a>
      </div>
    </>
  )
}
export default Footer
