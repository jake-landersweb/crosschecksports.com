import { GetStaticProps } from "next";
import DocCell from "../../components/docCell";
import Subpage from "../../components/subpage/subpage";
import getAllDocs from "../../lib/getAllDocs";

export const getStaticProps: GetStaticProps = async (context) => {
    console.log(context)
    const docs = await getAllDocs()

    return {
        props: {
            docs
        },
    };
}

export default function Docs({ docs }: { docs: any[] }) {

    const getDocs = () => {
        const items: any[] = []

        for (var i = 0; i < docs.length; i++) {
            items.push(<DocCell docData={docs[i]} />)
        }

        return items
    }

    return <Subpage props={{
        title: "Documentation",
        content: <div className="grid md:grid-cols-2 gap-2 md:gap-4">
            {getDocs()}
        </div>,
        barTitle: "Documentation",
        tags: "documentation,getting started,create sports team,create sports season,create sports game",
        maxWidth: undefined
    }} />
}