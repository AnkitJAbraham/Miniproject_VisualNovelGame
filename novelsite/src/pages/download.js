import React from 'react';
import ContainerBlock from '../components/ContainerBlock';

export default function Download() {
	return (
		<>
			<ContainerBlock />
			<div className='h-[10vh] invisible'></div>
			<div
				className="md:w-5/6 md:h-[92dvh] h-[80dvh] flex flex-col justify-evenly mx-auto text-white bg-black"
				id="download"
			>
				<div className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-[#faebd7] md:text-left px-5 text-center">
					Downloads
				</div>
				<div className="text-2xl px-10 md:text-left text-center">
					Download our game here for offline play at your leisure.
				</div>
				<div className="text-base px-10 italic md:text-left text-center">
					(Disclaimer: This is not a commercial game, and so it is not
					guaranteed to be completely free of bugs.)
				</div>
				<div className="text-xl px-10 md:text-2xl md:text-left text-center">
					Enjoy the finished product below which works on any Windows and Apple
					PCs with absolutely no restrictions!
				</div>
				<div className="text-base px-10 italic md:text-left text-center">
					Latest Version - Version 1.2.1
				</div>
				<div className="flex justify-center bg-black">
					<button
						type="button"
						className="transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02] text-3xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold border border-2 rounded-lg p-2 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 border-[#e2e2e2] inline-block px-5 py-2.5"
					>
						<a
							href="https://storage.googleapis.com/miniproject_visualnovel/merchant_of_venice-7.0-win.zip"
							aria-label="Download Now"
							title="Download the game as a compressed zip folder"
							className="flex items-center"
						>
							Download now!
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="#fff"
								className="w-6 h-6 ml-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
								/>
							</svg>
						</a>
					</button>
				</div>
			</div>
		</>
	);
}
