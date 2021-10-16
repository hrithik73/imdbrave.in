import React, { useEffect, useState } from "react"
import { collection, getDocs, orderBy, query } from "firebase/firestore"

import { db } from "../src/utility/Firebase"
import Header from "../src/components/Header"
import ProgressCard from "../src/components/ProgressCard"
import Footer from "../src/components/Footer"

const Timeline = () => {
  const [data, setdata] = useState([])

  const fetchData = async () => {
    const q = query(collection(db, "timeline"), orderBy("timeInterval", "desc"))

    const querySnapshot = await getDocs(q)
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
