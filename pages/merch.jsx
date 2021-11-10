import React, { useEffect, useState } from "react"

import { ReadDB } from "../src/utility/Firebase"
import Header from "../src/components/Header"
import MerchCard from "../src/components/MerchCard"
import { merch } from "../src/data/data"
import Footer from "../src/components/Footer"
import LoadingScreen from "../src/components/LoadingScreen"

const Merch = () => {
  const [data, setData] = useState([])

  useEffect(async () => {
    const data = await ReadDB(null, "merchData")
    // console.log(data)
    setData(data)
  }, [])

  if (!data) {
    return <LoadingScreen />
  }
  return (
    <>
      <Header current="Merch" />
      <div className="lg:flex flex-wrap justify-center align-center flex-1">
        <MerchCard item={merch.first} />
        <MerchCard item={merch.second} />
        <MerchCard item={merch.third} />
        {data.map((item) => {
          return <MerchCard item={item} key={item.imgURL} />
        })}
      </div>
      <Footer />
    </>
  )
}
export default Merch
