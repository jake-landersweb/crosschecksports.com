import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
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
  </>
}

export default MyApp
