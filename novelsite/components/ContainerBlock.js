import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import TitleImage from './TitleImage';
import Introduction from './Introduction';
import Features from './Features';
import Game from './Game';
import Screenshots from './Screenshots';
import Reviews from './Reviews';
import Download from './Download';

export default function ContainerBlock({children, ...customMeta}) {
	const meta = {
		title: 'Merchant Of Venice - Miniproject',
		description: `A visual novel based game`,
		image: '/titleimg.png',
		type: 'website',
		...customMeta,
	};
	return (
		<div>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta
					property="og:url"
					content={`https://www.visualnovelgame.vercel.app`}
				/>
				<link rel="canonical" href={`https://www.visualnovelgame.vercel.app`} />
				{/* Favicon for 32x32 size */}
				<link
					rel="icon"
					type="image/x-icon"
					sizes="32x32"
					href="/favicon-32x32.ico"
				/>

				<meta property="og:type" content={meta.type} />
				<meta
					property="og:site_name"
					content="Merchant Of Venice: Miniproject"
				/>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				<meta name="threads:card" content="summary_large_image" />
				<meta name="threads:site" content="@ankitjohn_" />
				<meta name="threads:title" content={meta.title} />
				<meta name="threads:description" content={meta.description} />
				<meta name="threads:image" content={meta.image} />
				{meta.date && (
					<meta property="article:published_time" content={meta.date} />
				)}
			</Head>
			{/* overflow-y-scroll h-screen snap-y snap-mandatory */}
			<main className="flex flex-col gap-20 md:gap-8 items-center bg-gradient-to-r from-[#000] via-[#24243e] to-[#0B1D51] background-animate text-white ">
				<div className="w-full gap-8 md:gap-0 flex flex-col flex-1 min-h-screen justify-around items-center snap-start">
					<Header />
					<TitleImage />
				</div>
				<div className="w-full gap-8 md:gap-0 md:w-2/3 flex flex-col flex-1 min-h-screen justify-evenly snap-start">
					<Introduction />
					<Features />
				</div>
				<div className="w-full gap-8 md:gap-0 md:w-2/3 flex flex-col flex-1 min-h-screen justify-evenly snap-start">
					<Screenshots />
					<Reviews />
				</div>
				<Game />
				<div className="w-full gap-8 md:gap-0 md:w-2/3 flex flex-col flex-1 min-h-screen justify-evenly snap-start">
					<Download />
					<Footer />
				</div>
			</main>
		</div>
	);
}
