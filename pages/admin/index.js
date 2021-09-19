import React from "react"
import Link from "next/link"

const admin = () => {
  return (
    <div className="h-screen flex-row content-center p-5 py-10 m-5 bg-gray-bg1">
      <h1 className="size-xl font-bold px-12 mx-12 text-center" >Choose one</h1>
      <Link href="/admin/merch"  >
        <div className="cursor-pointer max-w-sm m-auto bg-white my-10 rounded-lg border border-primary Border shadow-default py-10 px-16">
          Merch
        </div>
      </Link>
      <Link href="/admin/songs" >
        <div className="cursor-pointer max-w-sm m-auto my-10 bg-white rounded-lg border border-primary Border shadow-default py-10 px-16">
          Songs
        </div>
      </Link>

    </div>
  )
}
export default admin
