import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    author: 'Christopher Jacob (Random White Guy)',
    text: "Hands down the best game I've ever played !",
  },
  {
    author: 'Ashwin Saji (Silent But Deadly)',
    text: 'Extremely fun and intriguing game, made me a lifelong fan. Five stars !!',
  },
  {
    author: 'Alwin Shibu (Don of Kochi)',
    text: 'This is THE game of the year, must play if you want to live !!',
  },
  {
    author: 'Ajith Bobby (Local Banana Plant)',
    text: 'I like only two things now, Machine Learning, and this game !',
  },
  {
    author: 'Ankit John (Thicc And Handsome)',
    text: 'Whoever created this game are the best programmers ever !!',
  },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2900,
  arrows: false,
};

export default function Reviews() {
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);

  useEffect(() => {
    const shuffled = [...testimonials];
    shuffleArray(shuffled);
    setShuffledTestimonials(shuffled);
  }, []);

  return (
    <>
      <div className="text-3xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-4xl text-[#faebd7]">
        What Others Say About This!
      </div>
      <div className="w-full mt-6 max-w-4xl container mx-auto shadow-md bg-[#000] rounded-lg">
        <Slider {...settings}>
          {shuffledTestimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <blockquote className="relative p-4 rounded-lg">
                <p className="text-xl mb-4 max-w-prose">{testimonial.text}</p>
                <footer className="text-right text-[#faebd7]">
                  - {testimonial.author}
                </footer>
              </blockquote>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
