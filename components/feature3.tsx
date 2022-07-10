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
        <div className={`${reversed ? "md:flex-row-reverse" : ""} grid place-items-center md:flex md:justify-between md:items-center space-y-4 md:space-y-0 md:space-x-2`}>
            <div className={`${reversed ? "md:pl-8" : ""} space-y-4 md:pr-4`}>
                {/* title */}
                <h3 className={`${reversed ? "text-right" : ""} header grid place-items-center md:block`}>
                    {title}
                </h3>
                {/* description */}
                <div className="body min-w-[25vw]">
                    {description}
                </div>
            </div>
            {/* asset */}
            <div className="">
                <Image props={{
                    src: assetPath,
                    alt: assetAlt,
                    divClass: "max-w-[1500px]",
                    imgClass: `${assetBg} rounded-md border-[1px] border-gray-300 shadow-xl`
                }} />
            </div>
        </div>
    </>
}

export default Feature3