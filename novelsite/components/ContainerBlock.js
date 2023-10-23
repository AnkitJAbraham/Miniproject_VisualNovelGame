import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import TitleImage from "./TitleImage";
import Introduction from "./Introduction";
import Features from "./Features";
import Game from "./Game";
import Screenshots from "./Screenshots";
import Reviews from "./Reviews";
import Download from "./Download";

export default function ContainerBlock({ children, ...customMeta }) {

  const meta = {
    title: "Merchant Of Venice - Miniproject",
    description: `A visual novel based game`,
    image: "/titleimg.png",
    type: "website",
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
        <link
          rel="canonical"
          href={`https://www.visualnovelgame.vercel.app`}
        />
        {/* Favicon for 32x32 size */}
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon-32x32.ico" />

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Merchant Of Venice: Miniproject" />
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
      <main className="w-full flex flex-col justify-content items-center bg-gradient-to-r from-[#000] to-[#24243e] overflow-hidden text-white">
        <Header />
        <TitleImage />
        <Introduction />
        <Features />        
        <Screenshots />
        <Reviews />
        <Game />
        <Download />
        {/* <div>{children}</div> */}
        <Footer />
      </main>
    </div>
  );
}