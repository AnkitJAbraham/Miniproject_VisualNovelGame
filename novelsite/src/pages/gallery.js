import React from 'react';
import Image from 'next/image';
import ContainerBlock from '../components/ContainerBlock';
import image1 from '../../public/images/image1.webp';
import image2 from '../../public/images/image2.webp';
import image3 from '../../public/images/image3.webp';
import image4 from '../../public/images/image4.webp';
import image5 from '../../public/images/image5.webp';
import image6 from '../../public/images/image6.webp';

export default function Gallery() {
	return (
		<div className="bg-black">
			<ContainerBlock />
			<div className='h-[10vh] invisible'></div>
			<div className="md:w-5/6 mx-auto">
				<div className="md:text-left text-center text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-[#faebd7] py-6">
					Some Gameplay Moments
				</div>
				<div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:w-5/6 mx-auto px-2 py-10 select-none">
					<div className="md:col-span-2 col-span-1 md:w-3/4 mx-auto">
						<Image
							src={image1}
							alt="Image 1"							
							className="w-full h-full object-fill transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]"
						/>
					</div>
					<div className="col-span-1">
						<Image
							src={image2}
							alt="Image 2"
							className="w-full h-full object-cover transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]"
						/>
					</div>

					<div className="col-span-1">
						<Image
							src={image3}
							alt="Image 3"
							className="w-full h-full md:object-cover transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]"
						/>
					</div>

					<div className="md:col-span-2 col-span-1 md:w-3/4 mx-auto ">
						<Image
							src={image4}
							alt="Image 4"							
							className="w-full h-full md:object-cover transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]"
						/>
					</div>

					<div className="col-span-1">
						<Image
							src={image5}
							alt="Image 5"							
							className="w-full h-full md:object-cover transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]"
						/>
					</div>

					<div className="col-span-1">
						<Image
							src={image6}
							alt="Image 6"
							className="w-full h-full md:object-cover object-contain transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]"
						/>
					</div>
				</div>
			</div>
           
		</div>
	);
}
