import React from 'react';

export default function Game() {
	return (
		<div className="container mx-auto pt-8 pb-8 px-8 md:ml-40">
			<div className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white -mr-20">
				<h2>Demo</h2>
			</div>
			<div className="text-xl -mb-10 md:ml-20">
			Try our game, rendered in the browser without any additional downloads !
			</div>
			<div className="flex items-center justify-center md:pr-72 pr-9 pl-[34px] md:pl-20">
			<div className="mt-0 rounded-3xl pt-20 w-full max-w-6xl mx-auto -ml-8">
				<iframe
					src="https://storage.googleapis.com/miniproject_visualnovel/merchant_of_venice-7.0-web/index.html"
					title="Merchant Of Venice"
					width="1300"
					height="800"
					className="aspect-auto rounded-3xl h-64 md:h-[800px] md:w-[1300px] w-80"
				></iframe>
			</div>
			</div>
		</div>
	);
}



