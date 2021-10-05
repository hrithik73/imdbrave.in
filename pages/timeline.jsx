import React, { useEffect, useState } from "react"
import { collection, getDocs, orderBy } from "firebase/firestore"

import { db } from "../src/utility/Firebase"
import Header from "../src/components/Header"
import ProgressCard from "../src/components/ProgressCard"
import Footer from "../src/components/Footer"

const Timeline = () => {
  const [data, setdata] = useState([])

  const fetchData = async () => {
    const querySnapshot = await getDocs(
      collection(db, "timeline"),
      orderBy("timeInterval", "asc")
    )
    const timelineData = []
    querySnapshot.forEach((doc) => {
      timelineData.push(doc.data())
      // console.log(merchData)
    })
    setdata(timelineData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Header />
      {data.map((item, seq) => {
        //! Progress in Timeline
        return <ProgressCard item={item} key={item.id} seq={seq + 1} />
      })}
      <Footer />
    </>
  )
}
export default Timeline
