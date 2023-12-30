import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const images = [
	'/characters/antonio.png',
	'/characters/balthazar.png',
	'/characters/bassanio.png',
	'/characters/gobbo.png',
	'/characters/gratiano.png',
	'/characters/jessica.png',
];

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

const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};

export default function CharacterCarousel() {
	const [shuffledImages, setShuffledImages] = useState([]);

	useEffect(() => {
		const shuffled = [...images];
		shuffleArray(shuffled);
		setShuffledImages(shuffled);
	}, []);

	return (
		<>
			<div className="w-1/2 max-w-screen-lg container mx-auto py-10">
				<Slider {...settings}>
					{shuffledImages.map((image, index) => (
						<div key={index} className="px-6">
							<Image
								src={image}
								alt={`Image ${index}`}
								width={300}
								height={250}
								className="mt-0 mx-auto"
							/>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
}
