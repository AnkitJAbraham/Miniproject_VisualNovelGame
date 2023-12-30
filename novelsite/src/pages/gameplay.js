import ContainerBlock from '../components/ContainerBlock';
import React from 'react';

export default function Game() {
	return (
		<>
			<ContainerBlock />
			<div className="flex flex-col h-[90dvh] md:w-5/6 justify-start gap-4 p-6 mx-auto">
				<div className="text-4xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-5xl text-[#faebd7]">
					Demo
				</div>
				<div className="text-xl text-left md:text-2xl pt-2 p-6">
					Try our game, rendered in the browser without any additional downloads
					!
				</div>
				<div className="flex flex-col items-center rounded-3xl pt-6 w-full h-full mx-auto md:my-0 my-10">
					<iframe
						src="https://visualnovelgameweb.s3.ap-south-1.amazonaws.com/merchant_of_venice-7.0-web/index.html"
						title="Merchant Of Venice"
						width="100%"
						height="100%"
						className="rounded-3xl w-full"
                        alt="Merchant Of Venice Game Demo"
                        allow="autoplay; muted"
					></iframe>
				</div>
			</div>
		</>
	);
}
