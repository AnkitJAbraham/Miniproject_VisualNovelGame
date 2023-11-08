import React from 'react';

export default function Game() {
	return (
		<div className="container mx-auto pt-8 pb-8 px-8 md:ml-40">
			<div className="mb-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl text-white -mr-20">
				<h2>Demo</h2>
			</div>
			<div className="text-l -mb-10 md:ml-20">
			Try our game, rendered in the browser without any additional downloads !
			</div>
			<div className="flex items-center justify-center md:pr-64">
			<div className="mt-0 rounded-3xl pt-20 md:w-full max-w-6xl mx-auto">
				<iframe
					src="https://visualnovelgameweb.s3.ap-south-1.amazonaws.com/merchant_of_venice-7.0-web/index.html"
					title="Merchant Of Venice"
					width="1300"
					height="800"
					className="aspect-auto rounded-3xl h-64 md:h-[800px] md:w-[1300px] w-screen"
				></iframe>
			</div>
			</div>
		</div>
	);
}


