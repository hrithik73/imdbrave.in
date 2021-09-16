import React from "react"
import { otherLink, socialData } from "../data/data"
import Card from "../components/Card"

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
    text: "Got an recogination from imdb",
    link: socialData.imdb,
  },
  stage: {
    text: "Have Performed in more than 50+ program",
    link: socialData.live,
  },
  songs: {
    text: "Have many hit songs",
    link: socialData.playlist,
  },
}

const CardContainer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row sm:flex-row items-center justify-center lg:py-12 lg:px-12 lg:my-14 lg:mx-14 ">
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
