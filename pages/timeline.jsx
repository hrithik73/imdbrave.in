import React, { useEffect, useState } from "react"

import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import ProgressCard from "../src/components/ProgressCard"
import { ReadDB } from "../src/utility/Firebase"

const Timeline = () => {
  const [data, setData] = useState([])

  useEffect(async () => {
    const data = await ReadDB(null, "timeline")
    // console.log(data)
    setData(data)
  }, [])

  return (
    <>
      <Header current="Timeline" />

      {data.map((item, seq) => {
        //! Progress in Timeline
        return (
          <ProgressCard item={item} key={item.timeInterval} seq={seq + 1} />
        )
      })}
      <Footer />
    </>
  )
}
export default Timeline
