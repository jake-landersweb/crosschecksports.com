import Link from "next/link"
import Image from "./image"

type Feature3Props = {
    title: string
    description: JSX.Element
    assetPath: string
    assetAlt: string
    assetBg?: string
    reversed?: boolean
}

const Feature3 = ({ props }: { props: Feature3Props }) => {
    const { title, description, assetPath, assetAlt, assetBg = "", reversed = false } = props
    return <>
        <div className={`${reversed ? "lg:flex-row-reverse" : ""} grid place-items-center lg:flex lg:justify-between lg:items-center space-y-4 lg:space-y-0 lg:space-x-2`}>
            <div className={`${reversed ? "lg:pl-8" : ""} space-y-4 lg:pr-4`}>
                {/* title */}
                <h3 className={`${reversed ? "text-right" : ""} title-sub grid place-items-center lg:block`}>
                    {title}
                </h3>
                {/* description */}
                <div className="body min-w-[25vw] text-center lg:text-left max-w-[700px]">
                    {description}
                </div>
            </div>
            {/* asset */}
            <div className="">
                <Image props={{
                    src: assetPath,
                    alt: assetAlt,
                    divClass: "max-w-[700px]",
                    imgClass: `${assetBg} rounded-md border-[1px] border-gray-300 shadow-xl`
                }} />
            </div>
        </div>
    </>
}

export default Feature3