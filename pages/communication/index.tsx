import Head from "next/head"
import Feature2 from "../../components/feature2"
import Form from "../../components/form/form"
import Subpage from "../../components/subpage/subpage"

const Social = () => {
    return <>
        <Subpage props={{
            title: "Communication",
            tags: "team,social,chat,stats",
            content: <>
                <div className="space-y-16 md:space-y-32">
                    <Feature2 props={{
                        title: "Chat, Replies, and Stats",
                        description: <>
                            <p>Communicate with your team through a built in season level chat, accessible to everyone a part of that season. Chat rooms are kept separate from season to season to keep your rosters separate.</p>
                            <p>Leave a note when you check into an event and let a teammate comment on your note. Got a teammate who has a bad reason for missing a game? Let them know!</p>
                            <p>Keep your team engaged with a public stat tracking page. Season stats will show the relevant user-defined fields. Team stats will take all seasons and summate them together for a master stat list.</p>
                        </>,
                        assetPath: "/images/social.png",
                        assetAlt: "team chat, stats, and status replies",
                        assetBg: "bg-main"
                    }} />
                    <Form props={{
                        nameLabel: undefined,
                        emailLabel: undefined,
                        bodyLabel: undefined
                    }} />
                </div>
            </>
        }} />
    </>
}

export default Social