import Head from "next/head";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../public/demo/css/style.css";
import VideoState from "../context/video";
import PreLoader from "../layout/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setPreloader(false);
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();

    // if ('serviceWorker' in navigator) {
    //   navigator.serviceWorker
    //     .register('/service-worker.js')
    //     .catch(err => console.log('Erro ao carregar o service worker', err))
    // }
  }, []);
  return (
    <VideoState>
      <Head>
        <title>OLMO - Software, App, SaaS & Startup Landing Pages Pack </title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/demo/images/icons/favicon.ico"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-60724303-4" />
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-60724303-4');`}}/>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Marketing Inteligente</title>
        <meta name="author" content="Marketing Inteligente" />
      </Head>
      {preloader && <PreLoader />}
      <Component {...pageProps} />
    </VideoState>
  );
}

export default MyApp;
