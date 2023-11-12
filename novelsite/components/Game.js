import React from 'react';

export default function Game() {
	return (
		<div className="w-2/3 flex flex-col flex-1 md:min-h-screen justify-start gap-10 snap-start">
			<div className="text-3xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-4xl text-[#faebd7]">
				Demo
			</div>
			<div className="text-xl md:text-left text-center md:text-2xl pt-2">
				Try our game, rendered in the browser without any additional downloads !
			</div>
			<div className="flex flex-col items-center rounded-3xl pt-10 w-full mx-auto">
				<iframe
					src="https://visualnovelgameweb.s3.ap-south-1.amazonaws.com/merchant_of_venice-7.0-web/index.html"
					title="Merchant Of Venice"
					width="1300"
					height="900"
					className="rounded-3xl w-[40vh] h-[30vh] md:h-[600px] md:w-[1100px]"
				></iframe>
			</div>
		</div>
	);
}
