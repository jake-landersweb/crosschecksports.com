import Image from "./image"
import Link from "./link"

type FeatureProps = {
    src: string, alt: string, title: string, desc: string, reverse: boolean
}

const Feature = ({ props }: { props: FeatureProps }) => {
    const { src, alt, title, desc, reverse } = props
    return <div className={`${reverse ? "md:flex-row-reverse" : ""} md:flex md:items-center md:space-y-0 space-y-8`}>
        <div className="space-y-2 max-w-screen-sm md:text-left text-center">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-gray-400">{desc}</p>
        </div>
        <div className={`${reverse ? "md:pr-16" : "md:pl-16"} grid place-items-center`}>
            <Image props={{
                src: src,
                alt: alt,
                divClass: "max-w-[600px]",
                imgClass: "min-w-[200px] md:min-w-[400px]"
            }} />
        </div>
    </div>
}

export default Feature