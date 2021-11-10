import React from "react"
import Image from "next/image"

import logo from "./logo2.png"

const Logo = () => {
  return <Image src={logo} layout="responsive" height="40" width="40" />
}

export default Logo
