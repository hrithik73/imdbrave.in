import React, { useState, useEffect } from "react"
import SongCard from "../components/SongCard"
import { ReadDB } from "../utility/Firebase"
import LoadingScreen from "../components/LoadingScreen"

const recents = ({ data }) => {
  if (!data) {
    return <LoadingScreen />
  }
  return (
    <div className="md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {data.map((item) => {
        return <SongCard item={item} key={item.imgURL} />
      })}
    </div>
  )
}
export default recents

export async function getServerSideProps(context) {
  const data = await ReadDB(null, "songs")
  return {
    props: { data }, // will be passed to the page component as props
  }
}
