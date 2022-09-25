import React, { useEffect, useState } from "react"

import ProgressCard from "../components/ProgressCard"
import { ReadDB } from "../utility/Firebase"

const Timeline = ({ data }) => {
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

export async function getServerSideProps(context) {
  const data = await ReadDB(null, "timeline")
  return {
    props: { data }, // will be passed to the page component as props
  }
}
