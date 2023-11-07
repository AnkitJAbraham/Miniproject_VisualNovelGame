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
    <div className="container mx-auto py-6 md:py-8 px-8 md:ml-40">
      <div className="mb-10 text-4xl pb-8 w-full font-extrabold leading-none tracking-tight md:text-5xl text-white -mr-20">
        <h2>What Others Say About This!</h2>
      </div>
      <div className="w-full max-w-4xl mx-auto md:ml-60">
        <Slider {...settings}>
          {shuffledTestimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <blockquote className="relative p-6 rounded-lg shadow-md">
                <p className="text-2xl mb-4 max-w-prose">{testimonial.text}</p>
                <footer className="text-gray-500 text-right">
                  - {testimonial.author}
                </footer>
              </blockquote>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
