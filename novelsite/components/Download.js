import React from 'react';

export default function Download() {
	return (
		<div
			className="w-full flex flex-col flex-1 min-h-[65vh] md:min-h-[90vh] justify-evenly"
			id="download"
		>
			<div className="text-3xl font-extrabold leading-none tracking-tight md:text-4xl text-[#faebd7] md:text-left text-center">
				Downloads
			</div>
			<div className="text-2xl px-10 md:text-left text-center">
				Download our game here for offline play at your leisure.
				<br />
			</div>
			<div className="text-base px-10 italic md:text-left text-center">
				(Disclaimer: This is not a commercial game, and so it is not guaranteed
				to be completely free of bugs.)
			</div>
			<div className="text-xl px-10 md:text-2xl md:text-left text-center">
				Enjoy the finished product below, works on any Windows and Mac pc with
				absolutely no restrictions!
			</div>
			<div className="text-base px-10 italic md:text-left text-center">Latest Version - Version 1.2.1</div>
			<div className="flex justify-center">
				<button
					type="button"
					className=" mx-auto text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-2xl inline-block px-5 py-2.5"
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
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6 ml-2"
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
	);
}
