import Image from "./image"

type Feature2Props = {
    title: string
    description: JSX.Element
    assetPath: string
    assetAlt: string
    assetBg?: string
}

const Feature2 = ({ props }: { props: Feature2Props }) => {
    const { title, description, assetPath, assetAlt, assetBg = "" } = props
    return <>
        <div className="space-y-8 grid place-items-center">
            <div className="space-y-2">
                <h3 className="header text-center md:text-left">{title}</h3>
                <div className="space-y-2 body">
                    {description}
                </div>
            </div>
            <div className="">
                <Image props={{
                    src: assetPath,
                    alt: assetAlt,
                    divClass: "",
                    imgClass: `${assetBg} rounded-md border-[1px] border-gray-300 shadow-xl`
                }} />
            </div>
        </div>
    </>
}

export default Feature2