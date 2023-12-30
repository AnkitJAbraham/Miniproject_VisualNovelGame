import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

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

const shuffleArray = array => {
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
	autoplaySpeed: 3000,
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
		<div className="flex flex-col justify-evenly md:h-auto h-[90dvh] md:gap-10 w-5/6 mx-auto py-4">
			<div className="text-4xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-5xl text-[#faebd7] ">
				What Others Say About This!
			</div>
			<div className="w-full md:mt-6 max-w-4xl container mx-auto shadow-md bg-[#000] rounded-lg">
				<Slider {...settings}>
					{shuffledTestimonials.map((testimonial, index) => (
						<div key={index} className="p-4 ">
							<blockquote className="relative p-4 rounded-lg shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
								<p className="text-xl mb-4 max-w-prose">{testimonial.text}</p>
								<footer className="text-right text-[#faebd7]">
									- {testimonial.author}
								</footer>
							</blockquote>
						</div>
					))}
				</Slider>
			</div>
			<div className="mx-auto">
				<Image
					src="/images/pcgamerlogo.png"
					width={400}
					height={400}
					alt="Logo to show fake GOTY"
					className="h-full w-full"
				/>
			</div>
            <div className='md:text-[0.5rem] text-[0.25rem] text-center'>
					Disclaimer: This image is solely intended to represent the 2023 Game
					Of The Year Awards, and its presence on our website in no way implies,
					claims, advertises, or falsely purports that our game, &ldquo;Merchant
					of Venice,&rdquo; has received or holds the title of Game of the Year.
					This image is for illustrative purposes related to the awards event,
					and any such perception is unintentional.
				</div>
		</div>
	);
}
