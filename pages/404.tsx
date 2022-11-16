import Head from "next/head"
import Link from "../components/link"

const NotFound = () => {
    return <>
        <Head>
            <title key="title">Crosscheck - Not Found</title>
        </Head>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 min-h-[70vh]">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-main">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something&apos;s missing.</p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                <div className="grid place-items-center">
                    <Link props={{
                        href: "/",
                        child: <p>Return Home</p>,
                        isExternal: false,
                        className: "btn-main"
                    }} />
                </div>
            </div>
        </div>
    </>
}

export default NotFound