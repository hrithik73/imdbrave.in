import React from "react"

const SocialButton = ({ href, path, size }) => {
  return (
    <img
      className="p-0 m-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer	"
      src={path}
      style={{ height: size ? size : 40 }}
      onClick={() => window.open(href)}
    ></img>
  )
}
export default SocialButton
