import "tailwindcss/tailwind.css"
import "react-image-gallery/styles/css/image-gallery.css"
import Head from "next/head"
import ImageGallery from "react-image-gallery"

import CardContainer from "../src/components/CardContainer"
import RecentSongs from "../src/components/Recents/RecentSongs"
import RecentMerch from "../src/components/Recents/RecentMerch"
import StreamCard from "../src/components/StreamCard"

const images = [
  {
    original: "gallery/00.webp",
    thumbnail: "gallery/00.webp",
  },
  {
    original: "gallery/01.webp",
    thumbnail: "gallery/01.webp",
  },
  {
    original: "gallery/02.webp",
    thumbnail: "gallery/02.webp",
  },
  {
    original: "gallery/03.webp",
    thumbnail: "gallery/03.webp",
  },
  {
    original: "gallery/04.webp",
    thumbnail: "gallery/04.webp",
  },
]

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Dbrave</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                Indian singer and rapper from Darbhanga(Bihar). Dbrave is one of
                the biggest independent artists from Bihar having a huge
                subscriber count on youtube and has many super hit songs by his
                name. "Zila Darbhanga" is one the best hit anthem of all time in
                Bihar. And recently, after a wait of 1 year, he has released the
                "Darbhanga anthem(chapter 2)" on his Channel. He has received
                tremendous love and recognition from his 1st singing original "
                tum ho sukoon", which was one of his dream projects from the
                album "Be the Brave".
              </p>
            </div>
          </main>
        </div>
        <div className="lg:absolute lg:h-1/3 lg:inset-y-0 lg:right-0  lg:w-1/2 lg:top-0">
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
        <div className="items-center flex justify-center lg:justify-between lg:pl-20 pt-20 ">
          <div className="bg-white flex-col w-4/5 lg:w-1/4">
            <h4 className="text-center max-w-sm font-bold">STREAM AT</h4>
            <StreamCard />
          </div>
        </div>
        <div className="h-full lg:pt-30 lg:mt-80 mt-10 lg:px-20  ">
          <h2 className="text-center font-bold">SOME HIGHLIGHTS</h2>
          <CardContainer />
        </div>
        <div className="h-full mt-32 lg:px-20 ">
          <h2 className="text-center font-bold">RECENT RELEASE</h2>
          <RecentSongs />
        </div>
        <div className="h-full mt-32 lg:px-20 ">
          <h2 className="text-center font-bold">LATEST MERCH</h2>
          <RecentMerch />
        </div>
      </div>
    </>
  )
}
export default HomePage
