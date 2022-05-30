import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import HttpsRedirect from 'react-https-redirect';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <HttpsRedirect>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Dynamic Team Composition - Crosscheck Sports enables customized sports team management." />
        <meta name="author" content="Landersweb LLC" />
        <meta name="keywords" content="sports, team, management, customization" id="keywords" />
      </Head>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-JJ9RT96D8Q`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JJ9RT96D8Q', {
              page_path: window.location.pathname,
            });
          `,
        }} />
      <div className="text-txt bg-bg scroll-smooth">
        <div className="grid place-items-center">
          <div className="fixed top-0 z-50">
            <Header />
          </div>
          <div className="relative w-full max-w-[1500px] px-2 lg:px-20 md:px-10 min-h-screen pt-[100px] pb-24 md:pb-36">
            <Component {...pageProps} />
          </div>
          <div className="pt-4 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </HttpsRedirect>
  </>
}

export default MyApp
