import React from 'react';

export default function Header() {
	return (
		<div className="flex w-full">
			<div className="invisible flex-1"></div>
			<div className="md:ml-12 ml-10 flex-1 text-center text-4xl whitespace-nowrap font-extrabold leading-none tracking-tight bg-gradient-to-r from-[#feac5e] via-[#c779d0] to-[#4bc0c8] inline-block text-transparent bg-clip-text md:text-5xl">
				Merchant Of Venice
			</div>
			<div className="invisible md:visible flex-1 text-right pr-12">
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
	);
}
