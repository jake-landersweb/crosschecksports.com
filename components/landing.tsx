import Link from "next/link"
import { useState } from "react"
import Image from "./image"

const Landing = () => {
    const [currentImage, setCurrentImage] = useState("customized-events")

    const getImageName = () => {
        switch (currentImage) {
            case "customized-events": return "/images/customized_events-small.png"
            case "rich-chat": return "/images/rich-chat.png"
            case "roster-management": return "/images/roster-management.png"
            default: return "/images/customized_events.png"
        }
    }

    const selectorCell = (title: string, imageName: string) => {
        return <div className="">
            <button onClick={() => setCurrentImage(imageName)}>
                <p className={`${imageName == currentImage ? "bg-main bg-opacity-30 text-main font-medium" : ""} py-2 w-[200px] rounded-md grid place-items-center hover:opacity-75 transition-opacity cursor-pointer`}>{title}</p>
            </button>
        </div>
    }

    return <>
        <div className="grid place-items-center">
            <div className="grid place-items-center space-y-4 md:space-y-0 lg:flex items-center lg:flex-row-reverse">
                <div className="space-y-6 lg:pl-8">
                    <div className='text-4xl xl:text-6xl font-bold grid place-items-center lg:block'>
                        <h2 className="whitespace-nowrap">Your Customizable</h2>
                        <h2 className="text-center md:text-left">Sports Management App.</h2>
                    </div>
                    <div className="body grid place-items-center lg:block">
                        <h2>We take the hassle out of team management.</h2>
                        <h2>Customize Crosscheck to your team.</h2>
                    </div>
                    <div className="grid place-items-center lg:block">
                        <Link href="#download">
                            <a className='btn-main'>
                                Download Now
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="space-y-4 grid place-items-center">
                    <Image props={{
                        src: getImageName(),
                        alt: 'crosscheck sports mobile app showcase',
                        divClass: "",
                        imgClass: "max-h-[700px]"
                    }} />
                    <div className="md:flex bg-white border border-bg-700 p-[2px] rounded-md space-y-1 md:space-y-0">
                        {selectorCell("Customized Events", "customized-events")}
                        {selectorCell("Rich Chat", "rich-chat")}
                        {selectorCell("Roster Management", "roster-management")}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Landing