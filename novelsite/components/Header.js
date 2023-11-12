import React from 'react';

export default function Header() {
	return (
		<div className="flex flex-col w-full md:mt-0 pt-3 -mt-32">
			<div className="flex w-full md:flex-row flex-col justify-between">
				<div className="md:invisible basis-1/3"></div>
				<div className="basis-1/3 text-center text-4xl whitespace-nowrap font-extrabold leading-none tracking-tight bg-gradient-to-r from-[#F1C46A] via-[#c779d0] to-[#00F5D4] inline-block text-transparent bg-clip-text md:text-5xl md:pt-2">
					Merchant Of Venice
				</div>
				<div className="hidden md:block basis-1/3 text-right  md:pt-2 pr-12">
					<button
						type="button"
						className="text-white whitespace-nowrap bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-2xl px-5 py-2.5"
					>
						<a
							href="#download"
							aria-label="Download Now"
							onClick={e => {
								e.preventDefault();
								const element = document.querySelector('#download');
								if (element) {
									element.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
										inline: 'nearest',
									});
								}
							}}
						>
							Download Now
						</a>
					</button>
				</div>
			</div>
			<div className="my-8 h-0.5 w-full bg-white"></div>
		</div>
	);
}
