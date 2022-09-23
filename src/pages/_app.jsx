import React from "react"
import "tailwindcss/tailwind.css"
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
