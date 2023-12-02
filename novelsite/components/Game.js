import React from 'react';

export default function Game() {
	return (
		<div className="md:w-2/3 flex flex-col flex-1 md:min-h-screen justify-start gap-10">
			<div className="text-3xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-4xl text-[#faebd7]">
				Demo
			</div>
			<div className="text-xl text-left md:text-2xl pt-2 px-10">
				Try our game, rendered in the browser without any additional downloads !
			</div>
			<div className="flex flex-col items-center rounded-3xl pt-6 w-full h-full mx-auto md:my-0 my-10 px-2">
				<iframe
					src="https://visualnovelgameweb.s3.ap-south-1.amazonaws.com/merchant_of_venice-7.0-web/index.html"
					title="Merchant Of Venice"
					width="1920"
					height="1080"
					className="rounded-3xl md:h-[75vh] h-[40vh] w-full"
				></iframe>
			</div>
		</div>
	);
}
