import React, { useEffect, useState } from "react"
import { collection, getDocs, orderBy } from "firebase/firestore"

import { db } from "../src/utility/Firebase"
import Header from "../src/components/Header"
import MerchCard from "../src/components/MerchCard"
import { merch } from "../src/data/data"

const Merch = () => {
  const [data, setdata] = useState([])

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "merchData"))
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

  if (!data) {
    return null
  }
  return (
    <>
      <Header />
      <div className="lg:flex flex-wrap justify-center align-center flex-1">
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
