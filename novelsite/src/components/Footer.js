import React from 'react';

export default function Footer() {
	return (
		<div className="flex flex-col items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black pb-8 text-white">
			<div className="h-0.5 w-full bg-white"></div>
			{/* this is for the horizontal line decoration */}
			<div className="flex flex-wrap justify-center pt-4 pl-3 md:pl-0 md:items-center text-2xl">
				Check out our Github here:
				<a
					href="https://www.github.com/AnkitJAbraham/Miniproject_VisualNovelGame"
					className="pl-8 pt-1 md:mr-0 mr-9"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						className="invert transition-transform hover:scale-125 hover:shadow-[0px_0px_20px_6px_rgba(247,_143,_71,_0.7)] rounded-3xl"
					>
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
				</a>
			</div>

			<div className="flex flex-wrap space-y-4 md:space-y-0 md:flex-row justify-evenly md:items-center mt-8 w-2/3">
				<div className="text-2xl -mt-1 pl-0 md:pl-10 italic [text-shadow:0_10px_20px_#E11447]">Developed by - </div>
				<ul className="flex justify-between md:gap-0 gap-6">
					<li className="transform hover:scale-110 hover:-rotate-3 transition duration-300 text-right">
						{' '}
						<a
							className="hover:bg-fuchsia-950 rounded-md md:px-10 py-1 hover:text-gray-50 hover:font-semibold"
							href="https://www.ankitjohn.me"
							target="_blank"
						>
							Ankit John
						</a>
					</li>
					<li className="transform hover:scale-110 hover:-rotate-3 transition duration-300 text-center">
						{' '}
						<a
							className="hover:bg-[#000fff] rounded-md md:px-10 py-1 hover:text-gray-50 hover:font-semibold"
							href="https://in.linkedin.com/in/alwin-shibu-34a165210"
							target="_blank"
						>
							Alwin Shibu
						</a>
					</li>
					<li className="transform hover:scale-110 hover:rotate-3 transition duration-300 text-center">
						{' '}
						<a
							className="hover:bg-teal-400 rounded-md md:px-10 py-1 hover:text-gray-50 hover:font-semibold"
							href="https://in.linkedin.com/in/christopher-jacob-b696b1255"
							target="_blank"
						>
							Christopher Jacob
						</a>
					</li>
					<li className="transform hover:scale-110 hover:rotate-3 transition duration-300 text-center">
						{' '}
						<a
							className="hover:bg-orange-300 rounded-md md:px-10 py-1 hover:text-black hover:font-semibold"
							href="https://www.github.com/AshwinSaji10"
							target="_blank"
						>
							Ashwin Saji
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
