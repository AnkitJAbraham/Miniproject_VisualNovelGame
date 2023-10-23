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
		<div className="container mx-auto py-8 px-8 md:ml-40">
			<div className="mb-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-white">
				<h2>Some Gameplay Moments</h2>
			</div>
			<div className="w-full max-w-screen-lg md:ml-44">
				<Slider {...settings}>
					{shuffledImages.map((image, index) => (
						<div key={index} className="px-4">
							<Image
								src={image}
								alt={`Image ${index}`}
								width={1400}
								height={900}
								className="mt-0 rounded-3xl"
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

