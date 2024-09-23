"use client";

// Styles
import styles from './CustomSwiper.module.scss';
// Generator ID
import { nanoid as id } from 'nanoid';
// React
import { useEffect, useState } from 'react';
// Swiper JS
import { register } from "swiper/element/bundle";
register();

export default function CustomSwiper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Evita la renderización en el servidor
  if (!isClient) {
    return null; 
  }

  const swiperParams = {
    'slides-per-view': "auto",
    'space-between': "20",
    'navigation': "true",
    'loop': "true",
    // 'rewind': "true",
    'pagination': "true",
    'pagination-clickable': "true"
  };

  const breakpointsParams = {
    768: {
      slidesPerView: 3,
    },
    1024: {
      'effect': "coverflow",
      'coverflow-effect-rotate': "50", 
      'coverflow-effect-stretch': "0",
      'coverflow-effect-depth': "100",
      'coverflow-effect-modifier': "1",
      'coverflow-effect-slide-shadows': "true"
    }
  };

  const slides = [
    { src: "https://via.placeholder.com/300x200?text=Slide+1", alt: "Slide 1" },
    { src: "https://via.placeholder.com/300x200?text=Slide+2", alt: "Slide 2" },
    { src: "https://via.placeholder.com/300x200?text=Slide+3", alt: "Slide 3" },
    { src: "https://via.placeholder.com/300x200?text=Slide+4", alt: "Slide 4" },
    { src: "https://via.placeholder.com/300x200?text=Slide+5", alt: "Slide 5" },
    { src: "https://via.placeholder.com/300x200?text=Slide+6", alt: "Slide 6" },
  ];

  return (
    <div className={styles.swiper}>
      <swiper-container {...swiperParams} breakpoints={JSON.stringify(breakpointsParams)}>
        {slides.map((slide) => (
          <swiper-slide key={id()}>
              <img 
                alt={slide.alt} 
                className={styles.swiper__img}
                src={slide.src} 
              />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}