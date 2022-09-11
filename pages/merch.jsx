import React, { useEffect, useState } from "react"
import { ReadDB } from "../src/utility/Firebase"
import MerchCard from "../src/components/MerchCard"
import { merch } from "../src/data/data"
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
      <div className="m-10 lg:m-20">
        <MerchCard item={merch.first} />
        <MerchCard item={merch.second} />
        <MerchCard item={merch.third} />
        {data.map((item) => {
          return <MerchCard item={item} key={item.imgURL} />
        })}
      </div>
    </>
  )
}
export default Merch
