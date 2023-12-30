import React from 'react';
import Image from 'next/image';
import ContainerBlock from '../components/ContainerBlock';

export default function Gallery() {
	return (
		<>
			<ContainerBlock />
			<div className="md:w-5/6 mx-auto">
				<div className="md:text-left text-center text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-[#faebd7] py-6">
					Some Gameplay Moments
				</div>
				<div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-5/6 mx-auto my-10">
					<div className="md:col-span-2 col-span-1 w-3/4 mx-auto">
						<Image
							src="/images/image1.webp"
							alt="Image 1"
							width={800}
							height={600}
							className="w-full h-full object-cover transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]"
						/>
					</div>
					<div className="col-span-1">
						<Image
							src="/images/image4.webp"
							alt="Image 2"
							width={600}
							height={400}
							className="w-full h-full object-cover transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]"
						/>
					</div>

					<div className="col-span-1">
						<Image
							src="/images/image3.webp"
							alt="Image 3"
							width={600}
							height={400}
							className="w-full h-full md:object-cover transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]"
						/>
					</div>

					<div className="md:col-span-2 col-span-1 w-3/4 mx-auto ">
						<Image
							src="/images/image2.webp"
							alt="Image 4"
							width={1200}
							height={800}
							className="w-full h-full md:object-cover transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]"
						/>
					</div>

					<div className="col-span-1">
						<Image
							src="/images/image5.webp"
							alt="Image 5"
							width={600}
							height={400}
							className="w-full h-full md:object-none transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]"
						/>
					</div>

					<div className="col-span-1">
						<Image
							src="/images/image6.webp"
							alt="Image 6"
							width={600}
							height={400}
							className="w-full h-full md:object-none object-contain transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]"
						/>
					</div>
				</div>
			</div>
           
		</>
	);
}
