import React from 'react';

export default function Header() {
	return (
		<div className="pt-16 flex justify-between">
			<span className="sm:ml-28 px-60 ml-16">
				<h1 className="mb-10 text-4xl whitespace-nowrap font-extrabold leading-none tracking-tight bg-gradient-to-r from-[#feac5e] via-[#c779d0] to-[#4bc0c8] inline-block text-transparent bg-clip-text md:text-5xl lg:text-6xl ml-40 -mr-20">
					Merchant Of Venice
				</h1>
				{/* <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
					The Most Awaited Game of 2023
				</p> */}
			</span>
			<span className="mt-1 ml-20 pl-16 invisible md:visible">
				<button
					type="button"
					className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-2xl inline-block px-5 py-2.5"
				>
					<a
						href="#download"
						aria-label="Download Now"
						onClick={e => {
							e.preventDefault();
							const element = document.querySelector('#download');
							if (element) {
								element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
							}
						}}
					>
						Download Now
					</a>
				</button>
			</span>
			{/* horizontal line apparently */}
			<hr class="h-px my-8 bg-white border-0" />
		</div>
	);
}
