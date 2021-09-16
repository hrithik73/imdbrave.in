import React from "react"

const SocialButton = ({ href, path }) => {
  return (
    <img
      className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer	"
      src={path}
      style={{ height: 40 }}
      onClick={() => window.open(href)}
    ></img>
  )
}
export default SocialButton
