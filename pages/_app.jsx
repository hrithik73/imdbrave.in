import "tailwindcss/tailwind.css"
import Footer from "../src/components/Layout/Footer"
import Header from "../src/components/Layout/Header"

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
