import React, { useRef } from "react"

import { socialData } from "../data/data"
import Card from "../components/Card"

import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
const data = {
  yt: {
    text: "Youtube official chanel with 500k Views",
    link: socialData.youtube,
  },
  distupt: {
    text: "Got Featured in Distrupt Magzine",
    link: socialData.distrupt,
  },
  imdb: {
    text: "Got recogination from imdb",
    link: socialData.imdb,
  },
  stage: {
    text: "Have Performed in more than 50+ program",
    link: socialData.live,
  },
  songs: {
    text: "has many hit songs",
    link: socialData.playlist,
  },
}

const CardContainer = () => {
  const ref = useRef(null)

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset
  }

  return (
    <>
      <div className="flex justify-between">
        <button onClick={() => scroll(-400)}>
          <BiLeftArrow size={20} />
        </button>
        <button onClick={() => scroll(400)}>
          <BiRightArrow size={20} />
        </button>
      </div>
      <div
        className="flex overflow-x-scroll md:flex-row sm:flex-row "
        ref={ref}
      >
        <Card
          text={data.yt.text}
          link={data.yt.link}
          imgPath={"/social/yt_channel.png"}
        />
        <Card
          text={data.distupt.text}
          link={data.distupt.link}
          imgPath={"/other/distrupt.png"}
        />
        <Card
          text={data.imdb.text}
          link={data.imdb.link}
          imgPath={"/other/imdb.png"}
        />
        <Card
          text={data.stage.text}
          link={data.stage.link}
          imgPath={"/other/stage.png"}
        />
        <Card
          text={data.songs.text}
          link={data.songs.link}
          imgPath={"/other/songs.png"}
        />
      </div>
    </>
  )
}
export default CardContainer
