import Feature from "../../components/feature"
import Feature2 from "../../components/feature2"
import Form from "../../components/form/form"
import Image from "../../components/image"
import Subpage from "../../components/subpage/subpage"

const TeamControl = () => {

    return <>
        <Subpage props={{
            title: "Team Control",
            content: <>
                <div className="space-y-16 md:space-y-32">
                    <Feature2 props={{
                        title: "Roster Management",
                        description: <>
                            <p>Whether it is composing your first season roster or 20th, the Crosscheck Engine intelligently recalls your past information allowing you the fastest way to compose new rosters.</p>
                            <p>Further control your team flow with substitutes, positions, numbers, jersey sizes, and of course any custom field you want to add.</p>
                        </>,
                        assetPath: "/images/roster_management.png",
                        assetAlt: "sports team roster",
                        assetBg: "bg-main"
                    }} />
                    <Feature2 props={{
                        title: "Schedule Composition",
                        description: <>
                            <p>Whether it is composing your first season roster or 20th, the Crosscheck Engine intelligently recalls your past information allowing you the fastest way to compose new rosters.</p>
                            <p>Further control your team flow with substitutes, positions, numbers, jersey sizes, and of course any custom field you want to add.</p>
                        </>,
                        assetPath: "/images/create_event.png",
                        assetAlt: "sports schedule creationr",
                        assetBg: "bg-main"
                    }} />
                    <Form />
                </div>
            </>
        }} />
    </>
}

export default TeamControl