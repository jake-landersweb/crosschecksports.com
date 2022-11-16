import Head from "next/head"
import Feature from "../../components/feature"
import Feature3 from "../../components/feature3"
import Form from "../../components/form/form"
import CustomAppButtons from "../../components/mobileButtons/customButtons"
import Subpage from "../../components/subpage/subpage"
import SubpageExtras from "../../components/subpage/subpageExtras"

const HockeyTemplate = () => {
    return <>
        <Subpage props={{
            title: "Ice Hockey",
            tags: "sports,hockey,management,customization,app,mobile,web",
            maxWidth: 1200,
            content: <>
                <div className="space-y-16 md:space-y-32 grid place-items-center">
                    <div className="space-y-16 md:space-y-32 max-w-[1000px]">
                        <h2 className="text-xl text-txt-600 text-center">
                            Ice hockey is a unique sport to manage, and Crosscheck offers unique solutions. The sport this app was built around, the Crosscheck Engine is tailormade to streamline your team management and enables the builders of this app to do the same.
                        </h2>
                    </div>
                    <div className="space-y-2 px-4">
                        <h3 className="text-2xl text-center">How You Can Customize Your Experience</h3>
                        <div className="h-[1px] w-full bg-gray-200"></div>
                    </div>
                    <Feature3 props={{
                        title: 'At the Team Level',
                        description: <>
                            <ul className="list-disc pl-8 space-y-2 marker:text-main">
                                <li>Custom Position mapping for wingers, centers, defensemen, and goalies.</li>
                                <li>Tracking important player information like allergies, dietary restrictions, and USA Hockey Number</li>
                            </ul>
                        </>,
                        assetPath: '/images/team-scholastic-hockey.png',
                        assetAlt: 'Team chat, statistics, and comments with replies',
                        assetBg: "bg-white",
                        reversed: false,
                    }} />
                    <Feature3 props={{
                        title: 'At the Season Level',
                        description: <>
                            <ul className="list-disc pl-8 space-y-2 marker:text-main">
                                <li>Same Position mapping seen on the team level with the ability to extend it as you see fit from season to season.</li>
                                <li>Tracking whether your players have paid their dues or not.</li>
                                <li>Posting important season information like the home rink address or important contact information.</li>
                            </ul>
                        </>,
                        assetPath: '/images/season-scholastic-hockey.png',
                        assetAlt: 'Team chat, statistics, and comments with replies',
                        assetBg: "bg-main",
                        reversed: true,
                    }} />
                    <Feature3 props={{
                        title: 'At the Event Level',
                        description: <>
                            <ul className="list-disc pl-8 space-y-2 marker:text-main">
                                <li>Post game-time information like jersey color and the pre-game or post-game location.</li>
                                <li>Gather custom information from your players like what equipment they need or if they are running late.</li>
                            </ul>
                        </>,
                        assetPath: '/images/event-scholastic-hockey.png',
                        assetAlt: 'Team chat, statistics, and comments with replies',
                        assetBg: "bg-gray-200",
                        reversed: false,
                    }} />
                    <SubpageExtras />
                </div>
            </>
        }} />
    </>
}

export default HockeyTemplate