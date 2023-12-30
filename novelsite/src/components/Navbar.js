import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Navbar = () => {
	const router = useRouter();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const isLinkActive = href => {
		return router.pathname === href ? 'text-[#03FCBA]' : 'text-[#e2e2e2]';
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<nav className="border-gray-200 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black select-none">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative ">
				<Link
					href="/"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<Image
						src="/favicon.ico"
						className="h-8"
						alt="Game Logo"
						width={40}
						height={100}
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap text-[#faebd7]">
						Merchant Of Venice
					</span>
				</Link>
				<button
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600"
					onClick={toggleMobileMenu}
				>
					<span className="sr-only">Toggle mobile menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						{mobileMenuOpen ? (
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
							/>
						) : (
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						)}
					</svg>
				</button>
				<div
					className={`${
						mobileMenuOpen ? 'block fixed z-20 top-14 start-0' : 'hidden'
					} w-full md:hidden mt-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black`}
				>
					<ul className="font-medium flex flex-col p-4  border rounded-lg border-gray-700">
						<li>
							<Link
								href="/"
								className={`block py-2 px-3 rounded ${isLinkActive(
									'/',
								)}`}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className={`block py-2 px-3 rounded ${isLinkActive(
									'/about',
								)}`}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/gameplay"
								className={`block py-2 px-3 rounded ${isLinkActive(
									'/gameplay',
								)}`}
							>
								Gameplay
							</Link>
						</li>
						<li>
							<Link
								href="/gallery"
								className={`block py-2 px-3 rounded ${isLinkActive(
									'/gallery',
								)}`}
							>
								Gallery
							</Link>
						</li>
						<li>
							<Link
								href="/reviews"
								className={`block py-2 px-3 rounded ${isLinkActive(
									'/reviews',
								)}`}
							>
								Reviews
							</Link>
						</li>
						<li>
							<Link
								href="/download"
								className={`block py-2 px-3 rounded ${isLinkActive(
									'/download',
								)}`}
							>
								Download
							</Link>
						</li>
					</ul>
				</div>

				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
						<li>
							<Link
								href="/"
								className={`block py-2 px-3 rounded md:border-0 md:p-0 hover:text-[#03FCBA] ${isLinkActive(
									'/',
								)}`}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className={`block py-2 px-3 rounded md:border-0 md:p-0 hover:text-[#03FCBA] ${isLinkActive(
									'/about',
								)}`}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/gameplay"
								className={`block py-2 px-3 rounded md:border-0 md:p-0 hover:text-[#03FCBA] ${isLinkActive(
									'/gameplay',
								)}`}
							>
								Gameplay
							</Link>
						</li>
						<li>
							<Link
								href="/gallery"
								className={`block py-2 px-3 rounded md:border-0 md:p-0 hover:text-[#03FCBA] ${isLinkActive(
									'/gallery',
								)}`}
							>
								Gallery
							</Link>
						</li>
						<li>
							<Link
								href="/reviews"
								className={`block py-2 px-3 rounded md:border-0 md:p-0 hover:text-[#03FCBA] ${isLinkActive(
									'/reviews',
								)}`}
							>
								Reviews
							</Link>
						</li>
						<li>
							<Link
								href="/download"
								className={`block py-2 px-3 rounded md:border-0 md:p-0 hover:text-[#03FCBA] ${isLinkActive(
									'/download',
								)}`}
							>
								Download
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
