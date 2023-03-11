import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

import { motion } from 'framer-motion';

const SongCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      onClick={() => window.open(item.link)}
      className='h-80 m-10 group max-w-sm flex flex-col items-center justify-center rounded-lg bg-gradient-to-bl from-gray-700 via-gray-900 to-black hover:bg-gray-500 cursor-pointer relative'
    >
      <Image
        src={item.imgURL}
        height={200}
        width={200}
        className='rounded-lg'
      ></Image>
      <h3 className='text-white text-lg'>{item.title}</h3>
      <p className='text-gray-500 text-sm	 whitespace-pre-line'>{item.artist}</p>
      <div className='bg-green-400 h-10 w-10 rounded-full group-hover:scale-125 transition-transform duration-500 flex items-center absolute bottom-20 right-10 lg:right16 md:right-2'>
        <FaPlay className='h-5 w-full' />
      </div>
    </motion.div>
  );
};
export default SongCard;
