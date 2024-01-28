import {Inter} from 'next/font/google';
import ContainerBlock from '../components/ContainerBlock';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import videoimage from '../../public/images/titleimg.webp';

const inter = Inter({subsets: ['latin']});

export default function Home() {
	return (
		<div className="md:bg-[url('/images/largebg.webp')] bg-black bg-cover bg-no-repeat bg-fixed">
			<div className="max-[700px]:bg-[url('/images/mobilebg.webp')] relative z-50 bg-cover bg-no-repeat bg-fixed">
				<ContainerBlock />
				<div className="h-[10vh] invisible"></div>
				<div className="flex flex-col items-center justify-center overflow-hidden">
					<div className="h-[90vh] flex flex-col items-center justify-center text-black text-center md:text-6xl text-3xl font-bold mt-4 h-1/2">
						<div className="basis-1/4">
							<p className="fade-in-text animated-delay-1">Presenting</p>
							<p className="fade-in-text animated-delay-2">
								The <span className="text-[#03FCBA]">Game</span> Of The Year
							</p>
						</div>
						<div className="basis-1/4 fade-in-text animated-delay-3 md:w-auto w-5/6 mx-auto bg-opacity-30 backdrop-filter backdrop-blur-7xl bg-white flex items-center justify-center">
							<div className="md:whitespace-nowrap md:text-8xl text-6xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black ">
								Merchant Of Venice
							</div>
						</div>
						<div className="basis-1/2 flex items-center md:my-6 mx-auto md:w-3/4 w-11/12 mx-4">
							<div className=" bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white text-lg p-4">
								We, a group of B.Tech students from Rajagiri School of
								Engineering and Technology, Kochi, present our Miniproject — an
								interactive visual novel-based game, 2023.
							</div>
						</div>
					</div>
					<div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-4 md:w-5/6 mx-4 text-[#e2e2e2] text-center md:text-xl text-lg flex flex-col gap-8 my-12">
						<div className="text-4xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-5xl text-[#faebd7] md:p-4">
							Overview
						</div>
						<div className="md:p-4 p-2 text-white">
							&ldquo;<span className="text-[#03FCBA]">Merchant of Venice</span>
							&rdquo; is a riveting tale of love, betrayal, and justice set
							against the backdrop of 16th-century{' '}
							<span className="text-[#FF0054]">Venice</span>. In this promising
							gameplay adaptation, the story unfolds with an eclectic blend of
							drama, romance, and dark comedy. As the wealthy merchant{' '}
							<span className="text-[#FF0054] mr-1">Antonio</span>
							borrows money from the Jewish moneylender{' '}
							<span className="text-[#FF0054] mr-1">Shylock</span> to help his
							friend <span className="text-[#FF0054] mr-1">Bassanio</span> win
							the heart of the beautiful{' '}
							<span className="text-[#FF0054]">Portia</span>, a web of intricate
							plots is spun.{' '}
						</div>
						<div className="md:p-4 p-2 text-white">
							Navigating through themes of prejudice, mercy, and the price of
							vengeance, the characters grapple with complex moral dilemmas. The
							film promises a visually stunning portrayal of <span className="text-[#FF0054]">Renaissance Venice</span>
							and the enchanting <span className="text-[#FF0054]">Belmont</span>, where the fate of its characters
							intertwines in unexpected ways. With stellar performances,
							breathtaking cinematography, and a modern take on
							<span className="ml-1 text-[#FF0054]">Shakespeare</span>&apos;s
							timeless words, this interactive gameplay rendition of &ldquo;
							<span className="text-[#03FCBA]">Merchant of Venice</span>&rdquo;
							is poised to captivate players and breathe new life into this
							classic masterpiece. Prepare to be swept away by the allure of
							Venetian canals, the pursuit of true love, and the quest for
							justice in this upcoming cinematic spectacle.
						</div>
					</div>
					<div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-4 md:w-5/6 w-11/12 mx-4 mx-auto">
						<div className="text-4xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-5xl text-[#faebd7] md:p-4">
							Walkthrough
						</div>
						<div className="flex md:flex-row flex-col gap-4">
							<div className="select-none p-6 flex justify-center">
								<iframe
									src="https://www.youtube.com/embed/iZOCLmFYsNU"
									title="Ren&#39;Py Miniproject-Merchant of Venice walkthrough full"
									frameborder="0"
									width="700"
									height="400"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
									className="md:rounded-3xl rounded-xl md:h-[50dvh] h-[30dvh] md:w-[40dvw]"
								></iframe>
							</div>
							<div className="md:text-xl text-lg text-white md:p-10 md:text-left text-center">
								Explore a comprehensive gameplay walkthrough video showcasing
								every intricate detail of our captivating interactive visual
								novel-based game, providing an immersive preview of the unique
								narrative and engaging features.
							</div>
						</div>
					</div>
					<div className="flex md:flex-row flex-col gap-8 text-[#E2E2E2] md:text-2xl text-xl font-bold bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-4 md:w-5/6 text-center m-4">
						<div className="flex flex-col items-center justify-between basis-1/2 h-3/4 py-5 md:gap-12 gap-6">
							<div>Try out the game in your browser itself!</div>
							<Link
								href="/gameplay"
								className="transition-transform duration-300 ease-in-out hover:scale-105"
							>
								<div className="md:text-3xl text-2xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent md:font-bold font-black border border-2 rounded-lg p-2 border-[#e2e2e2]">
									Play &lsquo;Merchant Of Venice&rsquo;
								</div>
							</Link>
						</div>
						<div className="flex flex-col items-center justify-between basis-1/2 h-3/4 py-5 md:gap-12 gap-6">
							<div>Skip the wait, <br className='md:hidden block'/> Download Right Now !!</div>
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
				<Footer />
			</div>
		</div>
	);
}
