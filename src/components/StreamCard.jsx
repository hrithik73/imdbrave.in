import React from "react"
import { socialData } from "../data/data"
import SocialButton from "./SocialButton"

const StreamCard = () => {
  return (
    <div className="align-center  rounded overflow-hidden m-3 p-3 flex justify-evenly border-2  border-blue-900 border-opacity-40 ">
      <SocialButton
        href={socialData.spotify}
        path="/social/spotify.svg"
        height="45"
      />
      <SocialButton href={socialData.youtube} path="/social/youtube.svg" />
      <SocialButton href={socialData.savan} path="/social/savan.svg" />
      <SocialButton
        href={socialData.yt_music}
        path="/social/yt_music.png"
        width="40"
      />
      <SocialButton href={socialData.apple_music} path="/social/apple.png" />
    </div>
  )
}
export default StreamCard
