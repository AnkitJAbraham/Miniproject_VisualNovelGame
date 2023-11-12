import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const images = ['/image1.webp', '/image2.webp', '/image3.webp', '/image4.webp', '/image5.webp', '/image6.webp'];

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3100,
	arrows: false,
};

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  [array[i], array[j]] = [array[j], array[i]];
	}
  };

  export default function Screenshots() {
	const [shuffledImages, setShuffledImages] = useState([]);
  
	useEffect(() => {
	  const shuffled = [...images];
	  shuffleArray(shuffled);
	  setShuffledImages(shuffled);
	}, []);
  
	return (
		<>
			<div className="md:mb-8 md:text-left text-center text-3xl font-extrabold leading-none tracking-tight md:text-4xl text-[#faebd7]">
				Some Gameplay Moments
			</div>
			<div className="w-full max-w-screen-lg container mx-auto">
				<Slider {...settings}>
					{shuffledImages.map((image, index) => (
						<div key={index} className="px-6">
							<Image
								src={image}
								alt={`Image ${index}`}
								width={950}
								height={800}
								className="mt-0 rounded-3xl"
							/>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};

