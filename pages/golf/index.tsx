import Feature3 from "../../components/feature3"
import Form from "../../components/form/form"
import CustomAppButtons from "../../components/mobileButtons/customButtons"
import Subpage from "../../components/subpage/subpage"
import SubpageExtras from "../../components/subpage/subpageExtras"

const Golf = () => {
    return <>
        <Subpage props={{
            title: "Golf",
            tags: "sports,golf,management,customization,app,mobile,web",
            maxWidth: 1200,
            content: <>
                <div className="space-y-16 md:space-y-32 grid place-items-center">
                    <div className="space-y-16 md:space-y-32 max-w-[1000px]">
                        <h2 className="text-xl text-txt-600 text-center">
                            Golf is a unique beast to tackle with a sports management app. The events and communication is like other sports, but the customization and stats do not quite fit into the same mold as other sports. The Crosscheck Sports golf template is a demonstration to show how flexible the engine is by letting you manage a golf season and another sports season within the same team.
                        </h2>

                    </div>
                    <CustomAppButtons props={{
                        title: "Ready to create your golf app?"
                    }} />
                    <div className="space-y-2 px-4">
                        <h3 className="text-2xl text-center">How You Can Customize Your Experience</h3>
                        <div className="h-[1px] w-full bg-gray-200"></div>
                    </div>
                    <Feature3 props={{
                        title: 'At the Team Level',
                        description: <>
                            <ul className="list-disc pl-8 space-y-2 marker:text-main">
                                <li>Custom information stored on the user like handicap.</li>
                                <li>you have the ability to sort by these fields as well</li>
                            </ul>
                        </>,
                        assetPath: '/images/team-golf.png',
                        assetAlt: 'Team chat, statistics, and comments with replies',
                        assetBg: "bg-white",
                        reversed: false,
                    }} />
                    <Feature3 props={{
                        title: 'At the Season Level',
                        description: <>
                            <ul className="list-disc pl-8 space-y-2 marker:text-main">
                                <li>Keep track of who has won the most number of tournaments throughout the years.</li>
                                <li>Tracking whether your players have paid their club fees or not.</li>
                                <li>Posting important season information like the country club address or important contact information.</li>
                            </ul>
                        </>,
                        assetPath: '/images/season-golf.png',
                        assetAlt: 'Team chat, statistics, and comments with replies',
                        assetBg: "bg-main",
                        reversed: true,
                    }} />
                    <Feature3 props={{
                        title: 'At the Event Level',
                        description: <>
                            <ul className="list-disc pl-8 space-y-2 marker:text-main">
                                <li>Post game-time information like the dress code and the pre-game or post-game location.</li>
                                <li>Gather custom information from your players like if they need a golf court or asking them to input their strokes.</li>
                            </ul>
                        </>,
                        assetPath: '/images/event-golf.png',
                        assetAlt: 'Team chat, statistics, and comments with replies',
                        assetBg: "bg-gray-200",
                        reversed: false,
                    }} />
                    <SubpageExtras />
                    <div className="max-w-[1000px] w-full">
                        <Form props={{
                            nameLabel: "tiger",
                            emailLabel: "woods@golf.com",
                            bodyLabel: "My golf app vision"
                        }} />
                    </div>
                </div>
            </>
        }} />
    </>
}

export default Golf