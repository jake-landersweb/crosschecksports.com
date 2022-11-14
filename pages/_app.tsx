import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import HttpsRedirect from "react-https-redirect";
import Head from "next/head";
import BoundsWrapper from "../components/boundsWrapper";

function MyApp({ Component, pageProps }: AppProps) {

  return <div className="">
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        name="description"
        content="Sports Teams, Oragnized - Crosscheck Sports enables highly customized sports management all in an easy to use mobile application for iOS and Android. Create your sports team today, completely free!"
      />
      <meta name="author" content="Landersweb LLC" />
      <meta
        name="keywords"
        content="sports team organization app,sports team availability app,team schedule software,sports team attendance tracking"
        id="keywords"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      {/* <script
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
        }}
      /> */}
    </Head>
    <div className="grid place-items-center">
      <div className="fixed top-0 z-50">
        <Header />
      </div>
      <div className="relative pt-[100px] pb-24 md:pb-36">
        <Component {...pageProps} />
      </div>
      <div className="pt-4 w-full">
        <Footer />
      </div>
    </div>
  </div>
}

export default MyApp;
