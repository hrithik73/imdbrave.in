import React, { useEffect, useState } from "react"

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
      {data.map((item, seq) => {
        return (
          <ProgressCard item={item} key={item.timeInterval} seq={seq + 1} />
        )
      })}
    </>
  )
}
export default Timeline
