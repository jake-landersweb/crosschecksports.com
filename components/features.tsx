import BoundsWrapper from './boundsWrapper'
import Image from './image'
import Link from './link'

export default function Features() {

    const cell = (src: string, alt: string, href: string, title: string, desc: string, reverse: boolean) => {
        return <div className={`${reverse ? "md:flex-row-reverse" : ""} md:flex md:items-center md:space-y-0 space-y-8`}>
            <div className="space-y-2 max-w-screen-sm md:text-left text-center">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-200">{desc}</p>
                <div className="">
                    <Link props={{
                        href: href,
                        child: <>Learn More &rarr;</>,
                        isExternal: false,
                        className: "text-gray-200 md:hover:text-main transition-colors w-fit",
                    }} />
                </div>
            </div>
            <div className={`${reverse ? "md:pr-16" : "md:pl-16"} grid place-items-center`}>
                <Image props={{
                    src: src,
                    alt: alt,
                    divClass: "max-w-[500px]",
                    imgClass: "min-w-[200px] md:min-w-[400px]"
                }} />
            </div>
        </div>
    }

    return <div className="w-screen bg-acc -skew-y-[5deg] py-24 text-white">
        <div id="features" className="skew-y-[5deg]">
            <BoundsWrapper>
                <div className="space-y-8">
                    <div className=" grid place-items-center space-y-2">
                        <h2 className="title-sm text-center">The Good Stuff</h2>
                        <p className="subtext-lg text-gray-200 text-center max-w-2xl flex">The main strengths you can expect from Crosscheck Sports.</p>
                    </div>
                    <div className="space-y-4">
                        {cell("/images/schedule-management.png", "Sports Schedule Management", "/schedule-management", "Schedule Management", "A schedule needs to be a frictionless exchange of information. We give you the right tools for the job. Create games, practices, or other events, along with custom information to deliver to your users.", false)}
                        {cell("/images/roster-management.png", "Roster Management", "/roster-management", "Roster Management", "Crosscheck was created out of the need for better roster management. Gone are the days of old Excel spreadsheets, we give complete customization over rosters in a tiered system: team, season, and event.", true)}
                        {cell("/images/customization.png", "Customization", "/customization", "Customization", "We can't think of every use case that you may have, but we don't have to! The Crosscheck engine gives you the ability to add any custom information you want at any level. Along with appearance, tailor make the app experience for your team!", false)}
                        {cell("/images/communication.png", "Communication", "/communication", "Communication", "Building a community around your team is super important. We try to give you the tools to do that. Commenting on player's check-in statuses and a full featured chat with images and videos, with more features planned along the way.", true)}
                    </div>
                </div>
            </BoundsWrapper>
        </div>
    </div>
}