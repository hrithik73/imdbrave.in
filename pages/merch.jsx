import React from "react"
import { ReadDB } from "../src/utility/Firebase"
import MerchCard from "../src/components/MerchCard"
import { merch } from "../src/data/data"
import LoadingScreen from "../src/components/LoadingScreen"

const Merch = ({ data }) => {
  if (!data) {
    return <LoadingScreen />
  }

  return (
    <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 m-10 ">
      <MerchCard item={merch.first} />
      <MerchCard item={merch.second} />
      <MerchCard item={merch.third} />
      {data.map((item) => {
        return <MerchCard item={item} key={item.imgURL} />
      })}
    </div>
  )
}
export default Merch

export async function getServerSideProps(context) {
  const data = await ReadDB(null, "merchData")

  return {
    props: { data },
  }
}
