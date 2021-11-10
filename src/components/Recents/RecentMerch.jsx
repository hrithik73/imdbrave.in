import React, { useRef, useState, useEffect } from "react"
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"

import { ReadDB } from "../../utility/Firebase"
import MerchCard from "../MerchCard"
import { merch } from "../../data/data"
const RecentMerch = () => {
  const ref = useRef(null)
  const [data, setData] = useState([])

  useEffect(async () => {
    const data = await ReadDB(5, "merchData")
    // console.log(data)
    setData(data)
  }, [])

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset
  }

  return (
    <>
      <div className="flex justify-between">
        <button onClick={() => scroll(-400)}>
          <BiLeftArrow size={20} />
        </button>
        <button onClick={() => scroll(400)}>
          <BiRightArrow size={20} />
        </button>
      </div>
      <div className="flex overflow-x-scroll" ref={ref}>
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

export default RecentMerch
