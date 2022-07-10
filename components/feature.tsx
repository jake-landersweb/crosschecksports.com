import Link from "next/link"
import Image from "./image"

type FeatureProps = {
    title: string
    anchor: string,
    description: JSX.Element
    route: string
    assetPath: string
    assetAlt: string
    assetBg?: string
    showLearnMore?: boolean
}

const Feature = ({ props }: { props: FeatureProps }) => {
    const { title, anchor, description, route, assetPath, assetAlt, assetBg = "", showLearnMore = true } = props
    return <>
        <div id={anchor} className="grid place-items-center md:flex md:justify-between md:items-center space-y-4 md:space-y-0">
            <div className="space-y-4 md:pr-4">
                {/* title */}
                <h3 className="header grid place-items-center md:block">
                    {title}
                </h3>
                {/* description */}
                <div className="body">
                    {description}
                </div>
                {/* description */}
                {showLearnMore ? <>
                    <div className="grid place-items-center md:block">
                        <Link href={route} scroll={true}>
                            <a className="text-main hover:text-txt-700 hover:opacity-50 transition-all">
                                Learn more &rarr;
                            </a>
                        </Link>
                    </div>
                </> : <></>}
            </div>
            {/* asset */}
            <div className="">
                <Image props={{
                    src: assetPath,
                    alt: assetAlt,
                    divClass: "max-w-[800px]",
                    imgClass: `${assetBg} rounded-md border-[1px] border-gray-300 shadow-xl`
                }} />
            </div>
        </div>
    </>
}

export default Feature