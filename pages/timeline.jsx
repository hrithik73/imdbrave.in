import React, { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"

import { db } from "../src/utility/Firebase"
import Header from "../src/components/Header"
import ProgressCard from "../src/components/ProgressCard"

const Timeline = () => {
  const [data, setdata] = useState([])

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "timeline"))
    const merchData = []
    querySnapshot.forEach((doc) => {
      merchData.push(doc.data())
      // console.log(merchData)
    })
    setdata(merchData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Header />
      {data.map((item, seq) => {
        return <ProgressCard item={item} key={item.id} seq={seq + 1} />
      })}
    </>
  )
}
export default Timeline
