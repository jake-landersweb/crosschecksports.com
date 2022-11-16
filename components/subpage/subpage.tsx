import Head from "next/head"
import BoundsWrapper from "../boundsWrapper"

type SubpageProps = {
    title: string
    content: JSX.Element
    barTitle?: string
    tags: string
    maxWidth?: number
}

const Subpage = ({ props }: { props: SubpageProps }) => {
    const { title, content, barTitle, tags, maxWidth = 1000 } = props;
    return <BoundsWrapper>
        <Head>
            <title>{barTitle ?? title} - Crosscheck</title>
            <meta name="keywords" content={tags} id="keywords" />
        </Head>
        <div className="grid place-items-center mb-32">
            <div className={`max-w-[${maxWidth}px] w-full space-y-8 md:space-y-32`}>
                <div className="grid place-items-center">
                    <h2 className="text-4xl md:text-6xl md:pt-[50px] font-medium tracking-tight">{title}</h2>
                </div>
                {content}
            </div>
        </div>
    </BoundsWrapper>
}

export default Subpage