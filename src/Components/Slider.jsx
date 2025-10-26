import React, { useEffect, useState, useRef } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() { 
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos()
      .then(resp => {
        setMovieList(resp.data.results);
      })
      .catch(err => console.error(err));
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  }

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  }

  return (
    <div className='relative'>
      <HiChevronLeft
        className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer z-10'
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] right-0 cursor-pointer z-10'
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth'
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt={item.title || item.name}
            className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-4 hover:border-white transition-all duration-100 ease-in cursor-pointer'
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
