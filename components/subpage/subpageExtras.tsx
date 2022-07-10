import Feature3 from "../feature3"

const SubpageExtras = () => {
    return <>
        <div className="space-y-16 md:space-y-32 grid place-items-center">
            <div className="space-y-2 px-4">
                <h3 className="text-2xl text-center">How Else You Can Enhance Your Experience</h3>
                <div className="h-[1px] w-full bg-gray-200"></div>
            </div>
            <Feature3 props={{
                title: 'Polls',
                description: <>
                    <ul className="list-disc pl-8 space-y-2 marker:text-main">
                        <li>Collect important information from your team like preferences on dinner or whether they are interested in a event or not</li>
                        <li>The selections are completely customizable, and you can choose whether to show the results and individual responses or not.</li>
                    </ul>
                </>,
                assetPath: '/images/polls.png',
                assetAlt: 'Team chat, statistics, and comments with replies',
                assetBg: "bg-white",
                reversed: true,
            }} />
            <Feature3 props={{
                title: 'Communication',
                description: <>
                    <ul className="list-disc pl-8 space-y-2 marker:text-main">
                        <li>Keep all of your team operations in the same location with in-app chat!</li>
                        <li>Everyone can reply to the statuses your players leave on check in.</li>
                        <li>A season-wide blast lets all of your players send an important notification out to the whole team</li>
                    </ul>
                </>,
                assetPath: '/images/communication.png',
                assetAlt: 'Team chat, statistics, and comments with replies',
                assetBg: "bg-main",
                reversed: false,
            }} />
            <Feature3 props={{
                title: 'Statistics',
                description: <>
                    <ul className="list-disc pl-8 space-y-2 marker:text-main">
                        <li>Define what stats are important to you from goals and assists to penalty minutes and plus/minus.</li>
                        <li>Stats cascade from the game level, to the season level, all the way to a comprehensive overview of all the stats for all seasons you have!</li>
                    </ul>
                </>,
                assetPath: '/images/stats-hockey.png',
                assetAlt: 'Team chat, statistics, and comments with replies',
                assetBg: "bg-gray-200",
                reversed: true,
            }} />
        </div>
    </>
}

export default SubpageExtras