import React, {useEffect, useRef, useState} from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function ContainerBlock({children, ...customMeta}) {
	const meta = {
		title: `Merchant Of Venice`,
		description: `Merchant of Venice, an interactive visual novel game.`,
		image: '', 
		type: 'website',
		...customMeta,
	};
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	const loadingTimer = setTimeout(() => {
	// 		setLoading(false);
	// 	}, 1700);
	// 	return () => clearTimeout(loadingTimer);
	// }, []);

	return (
		<div>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta property="og:url" content={`https://visualnovelgame.vercel.app`} />
				<link rel="canonical" href={`https://visualnovelgame.vercel.app`} />
				<link rel="icon" href="/favicon/favicon.ico" />
				<link
					rel="icon"
					type="image/x-icon"
					sizes="32x32"
					href="/favicon-32x32.ico"
				/>
				{/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
				{/* <link
					rel="preload"
					as="font"
					href="/fonts/Monument-Regular.ttf"
					type="font/ttf"
					crossOrigin="anonymous"
				/> */}
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="Merchant Of Venice" />
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
			</Head>
			{/* {loading ? (
				<div classNameName="flex bg-[url('/images/bg.png')] h-screen items-center justify-center">
					<Loader />
				</div>
			) : ( */}		
			<Navbar />	
		</div>
	);
}
