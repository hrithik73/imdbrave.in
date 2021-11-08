import CardContainer from "../src/components/CardContainer"
import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import StreamCard from "../src/components/StreamCard"

import ImageGallery from "react-image-gallery"
import RecentCard from "../src/components/Recents/RecentCard"
import RecentMerch from "../src/components/Recents/RecentMerch"

const images = [
  {
    original: "dbrave.png",
    thumbnail: "dbrave.png",
  },
  {
    original: "gallery/01.png",
    thumbnail: "gallery/01.png",
  },
  {
    original: "gallery/02.png",
    thumbnail: "gallery/02.png",
  },
  {
    original: "gallery/03.png",
    thumbnail: "gallery/03.png",
  },
  {
    original: "gallery/04.png",
    thumbnail: "gallery/04.png",
  },
]

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="max-w-full mx-auto relative bg-white overflow-hidden p-0 m-0">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-28 lg:max-w-2xl lg:w-full lg:pb-28  xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hey! This is </span>{" "}
                <span className="block text-indigo-600 xl:inline">DBRAVE</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ">
                Md. Danish Iqbal, who goes with his stage name "Dbrave" is an
                indian singer and rapper from Darbhanga(Bihar).Who has a large
                base of subscriber on youtube and have many super hit song by
                his name."Zila Darbhanga" is one the best hit anthem of all time
                in Bihar
              </p>
            </div>
          </main>
        </div>
        <div className="lg:absolute lg:h-1/2 lg:inset-y-0 lg:right-0 lg:w-1/2 lg:top-0">
          <ImageGallery
            items={images}
            autoPlay={true}
            slideInterval={3000}
            showFullscreenButton={false}
            showThumbnails={false}
            showPlayButton={false}
            showBullets
          />
        </div>
        <div className="lg:ml-12 lg:pl-12 mt-0 md:ml-24 md:pl-24 lg:w-5/6 pt-10 ">
          <h4 className="text-center max-w-sm  font-bold">STREAM AT</h4>
          <StreamCard />
        </div>
        <div className="h-full lg:pt-30 lg:mt-96 mt-10 lg:px-20">
          <h2 className="text-center font-bold">SOME HIGHLIGHTS</h2>
          <CardContainer />
        </div>
        <div className="h-full mt-32 lg:px-20 ">
          <h2 className="text-center font-bold">RECENT RELEASE</h2>
          <RecentCard />
        </div>
        <div className="h-full mt-32 lg:px-20 ">
          <h2 className="text-center font-bold">LETEST MERCH</h2>
          <RecentMerch />
        </div>
      </div>
      <Footer />
    </>
  )
}
export default HomePage
