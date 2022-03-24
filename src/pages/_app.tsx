import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'League Spartan', sans-serif;
    margin: 0;
    padding: 0;
  }
  a, a:hover, a:visited{
    color: inherit;
    text-decoration: none;
  }
  a:hover{
    text-decoration: underline;
  }
  .btn{
    border-radius: 8px;
    padding: 8px;
    background-color: #016666;
    color: white;
    text-decoration: none;
  }
  .container{
    max-width: 1200px;
    width: 100%;
    padding: 0 8px;
  }
`;


const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta charSet="utf-8" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Marketing Inteligente</title>
      <meta name="author" content="Marketing Inteligente" />
      <meta name="generator" content="Starfield Technologies; Go Daddy Website Builder 8.0.0000" />
      <link rel="manifest" href="https://inteligente.marketing/manifest.webmanifest" />
      <link rel="apple-touch-icon" sizes="57x57"
            href="https://img1.wsimg.com/isteam/ip/static/pwa-app/logo-default.png/:/rs=w:57,h:57,m" />
      <link rel="apple-touch-icon" sizes="60x60"
            href="https://img1.wsimg.com/isteam/ip/static/pwa-app/logo-default.png/:/rs=w:60,h:60,m" />
      <link rel="apple-touch-icon" sizes="72x72"
            href="https://img1.wsimg.com/isteam/ip/static/pwa-app/logo-default.png/:/rs=w:72,h:72,m" />
      <link rel="apple-touch-icon" sizes="114x114"
            href="https://img1.wsimg.com/isteam/ip/static/pwa-app/logo-default.png/:/rs=w:114,h:114,m" />
      <link rel="apple-touch-icon" sizes="120x120"
            href="https://img1.wsimg.com/isteam/ip/static/pwa-app/logo-default.png/:/rs=w:120,h:120,m" />
      <link rel="apple-touch-icon" sizes="144x144"
            href="https://img1.wsimg.com/isteam/ip/static/pwa-app/logo-default.png/:/rs=w:144,h:144,m" />
      <link rel="apple-touch-icon" sizes="152x152"
            href="https://img1.wsimg.com/isteam/ip/static/pwa-app/logo-default.png/:/rs=w:152,h:152,m" />
      <link rel="apple-touch-icon" sizes="180x180"
            href="https://img1.wsimg.com/isteam/ip/static/pwa-app/logo-default.png/:/rs=w:180,h:180,m" />
      <meta property="og:url" content="https://inteligente.marketing/" />
      <meta property="og:site_name" content="Marketing Inteligente" />
      <meta property="og:title" content="Aumente o faturamento do seu negócio com anúncios inteligentes" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://img1.wsimg.com/isteam/stock/uENxzPOagDu35BQJA" />
      <meta property="og:locale" content="pt_BR" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Marketing Inteligente" />
      <meta name="twitter:description"
            content="Aumente o faturamento do seu negócio com anúncios inteligentes" />
      <meta name="twitter:image" content="https://img1.wsimg.com/isteam/stock/uENxzPOagDu35BQJA" />
      <meta name="twitter:image:alt" content="Marketing Inteligente" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap" rel="stylesheet" />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default App;
