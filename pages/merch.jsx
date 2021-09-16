import React, { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"

import { db } from "../src/utility/Firebase"
import Header from "../src/components/Header"
import MerchCard from "../src/components/MerchCard"

const Merch = () => {
  const [data, setdata] = useState([])
  console.log(data)

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
      {data.map((item) => {
        return (
          <div className="lg:flex-row justify-center align-center">
            <MerchCard item={item} />
          </div>
        )
      })}
    </>
  )
}
export default Merch
