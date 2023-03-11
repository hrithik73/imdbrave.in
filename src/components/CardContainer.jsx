import React, { useRef } from 'react';

import { socialData } from '../data/data';
import Card from '../components/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const data = {
  yt: {
    text: 'Youtube official chanel with 500k Views',
    link: socialData.youtube,
  },
  distupt: {
    text: 'Got Featured in Distrupt Magzine',
    link: socialData.distrupt,
  },
  imdb: {
    text: 'Got recogination from imdb',
    link: socialData.imdb,
  },
  stage: {
    text: 'Have Performed in more than 50+ program',
    link: socialData.live,
  },
  songs: {
    text: 'has many hit songs',
    link: socialData.playlist,
  },
};

const CardContainer = () => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'
    >
      <SwiperSlide>
        <Card
          text={data.yt.text}
          link={data.yt.link}
          imgPath={'/social/yt_channel.png'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          text={data.yt.text}
          link={data.yt.link}
          imgPath={'/social/yt_channel.png'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          text={data.yt.text}
          link={data.yt.link}
          imgPath={'/social/yt_channel.png'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          text={data.yt.text}
          link={data.yt.link}
          imgPath={'/social/yt_channel.png'}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          text={data.yt.text}
          link={data.yt.link}
          imgPath={'/social/yt_channel.png'}
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default CardContainer;

//  <div
//         className="flex overflow-x-scroll md:flex-row sm:flex-row "
//         ref={ref}
//       >
//         <Card
//           text={data.yt.text}
//           link={data.yt.link}
//           imgPath={"/social/yt_channel.png"}
//         />
//         <Card
//           text={data.distupt.text}
//           link={data.distupt.link}
//           imgPath={"/other/distrupt.png"}
//         />
//         <Card
//           text={data.imdb.text}
//           link={data.imdb.link}
//           imgPath={"/other/imdb.png"}
//         />
//         <Card
//           text={data.stage.text}
//           link={data.stage.link}
//           imgPath={"/other/stage.png"}
//         />
//         <Card
//           text={data.songs.text}
//           link={data.songs.link}
//           imgPath={"/other/songs.png"}
//         />
//       </div>
