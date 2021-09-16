import React from "react"
import { socialData } from "../data/data"

import SocialButton from "./SocialButton"

const SocialCard = () => {
  return (
    <div className="max-w-sm p-8 rounded overflow-hidden m-2 lg: flex justify-around	">
      <SocialButton href={socialData.youtube} path="social/youtube.svg" />
      <SocialButton href={socialData.facebook} path="social/fb.svg" />
      <SocialButton href={socialData.instagram} path="social/insta.svg" />
      <SocialButton href={socialData.spotify} path="social/spotify.svg" />
      <SocialButton href={socialData.savan} path="social/savan.svg" />
      <SocialButton href={socialData.yt_music} path="social/yt_music.svg" />
      <SocialButton
        href={socialData.apple_music}
        path="social/apple-music.svg"
      />
    </div>
  )
}
export default SocialCard
