import React from "react"
import Image from "next/image"

const SocialButton = ({ href, path, height, width }) => {
  return (
    <div>
      <Image
        className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
        src={path}
        height={height ? height : 40}
        width={width ? width : 50}
        onClick={() => window.open(href)}
      ></Image>
    </div>
  )
}
export default SocialButton
