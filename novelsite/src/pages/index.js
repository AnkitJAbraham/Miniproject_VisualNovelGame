import {Inter} from 'next/font/google';
import { Dancing_Script } from 'next/font/google';
import ContainerBlock from '../components/ContainerBlock';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({subsets: ['latin']});

export default function Home() {
	return (
		<>
			<ContainerBlock />
			<div className="md:h-[92vh] flex flex-col items-center justify-center overflow-hidden md:bg-[url('/images/largebg.webp')] bg-[url('/images/mobilebg.webp')] bg-cover bg-no-repeat bg-fixed">
			{/* bg-[url('/images/mobile_test.avif')] */}
				<div className="text-black text-center md:text-6xl text-3xl font-bold mt-4 h-1/2">
					<div className="mb-8">
						<p className="fade-in-text animated-delay-1">Presenting</p>
						<p className="fade-in-text animated-delay-2">
							The Game Of The Year
						</p>
					</div>
					<div className="fade-in-text animated-delay-3 mb-2 md:bg-transparent bg-[#efefef] md:w-full w-5/6 mx-auto">
						<div className="md:text-8xl max-[400px]:text-5xl text-6xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
							Merchant Of Venice
						</div>
					</div>
				</div>
				<div className="flex md:flex-row flex-col gap-8 text-[#E2E2E2] md:text-2xl text-xl font-bold bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-4 w-5/6 text-center my-4">
					<div className="flex flex-col items-center justify-between basis-1/3 h-3/4 py-5 gap-12">
						<div>Try out the game in your browser itself!</div>
						<div className='animate-bob'>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="36"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0" />
							</svg>
						</div>
						<Link
							href="/gameplay"
							className="transition-transform duration-300 ease-in-out hover:scale-105"
						>
							<div className="md:text-3xl text-2xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:font-bold font-black border border-2 rounded-lg p-2 border-[#e2e2e2]">
								Play &lsquo;Merchant Of Venice&rsquo;
							</div>
						</Link>
					</div>
					<div className="flex flex-col basis-1/3 gap-10 py-5">
						<div>Check out the walkthrough video</div>
						<div>
							<a href="https://www.youtube.com/watch?v=iZOCLmFYsNU">
								<Image
									src="/images/titleimg.webp"
									width={400}
									height={400}
									alt="Game Video"
									className="transition-transform duration-300 ease-in-out hover:scale-105 mx-auto"
								></Image>
							</a>
						</div>
					</div>
					<div className="flex flex-col items-center justify-between basis-1/3 h-3/4 py-5 gap-6">
						<div>Skip the wait, <br/> Download Right Now !!</div>
						<div className='animate-bob'>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="36"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0" />
							</svg>
						</div>
						<Link
							href="/download"
							className="transition-transform duration-300 ease-in-out hover:scale-105"
						>
							<div className="md:text-3xl text-2xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:font-bold font-black border border-2 rounded-lg p-2 border-[#e2e2e2]">
								Download the Game
							</div>
						</Link>
					</div>
				</div>
			
			</div>
			{/* <Footer /> */}
		</>
	);
}
