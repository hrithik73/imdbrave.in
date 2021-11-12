import React, { useEffect, useState } from "react"
import Image from "next/image"
// import Link from "next/link"

import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import { socialData, team } from "../data/data"
import SocialButton from "./SocialButton"

const Footer = () => {
  const [ytData, setTtData] = useState({ title: "", thumbnail: "", link: "" })

  // const requestOptions = {
  //   method: "GET",
  //   redirect: "follow",
  // }

  // const getLatestData = () => {
  //   console.log("Called")
  //   fetch(
  //     "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCSCEDbpHxxn1urTJtILWqdw&maxResults=10&order=date&type=video&key=AIzaSyDV8Wo80C8S6_Udb_vUKfLRmcwMqIvUFu4",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) =>
  //       setTtData({
  //         title: result.items[0].snippet.title,
  //         link: result.items[0].id.videoId,
  //         thumbnail: result.items[0].snippet.thumbnails.high.url,
  //       })
  //     )
  //     .catch((error) => console.log("error", error))
  // }

  // useEffect(() => {
  //   // console.log("UseEffect")
  //   const today = new Date().toJSON().slice(0, 10).replace(/-/g, "/")
  //   const isDiff = localStorage.getItem("today") != today
  //   // localStorage.setItem("today", today)
  //   isDiff && getLatestData()
  //   console.log(isDiff)
  // }, [])

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
          {/* {ytData.title && (
            <div className="flex-wrap rounded w-3/4 h-full lg:w-1/4 items-center">
              <Image
                className="cursor-pointer"
                height={360}
                width={480}
                objectFit="cover"
                src={ytData.thumbnail}
                onClick={() => {
                  window.open(`https://youtube.com/watch?v=${ytData.link}`)
                }}
              />
              <h1 className="text-white font-bold overflow-hidden text-sm sm:mr-3 truncate ">
                {ytData.title}
              </h1>
            </div>
          )} */}
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
