import Form from "../../components/form/form"
import Subpage from "../../components/subpage/subpage"

import { IoHelpOutline, IoPeopleOutline } from 'react-icons/io5'
import { BsGear, BsCalendarWeek } from 'react-icons/bs'
import { MdOutlinePrivacyTip, MdOutlineSportsTennis } from 'react-icons/md'
import Link from "next/link"
import { GetStaticProps } from "next"
import getAllDocs from "../../lib/getAllDocs"
import DocCell from "../../components/docCell"

export const getStaticProps: GetStaticProps = async (context) => {
    console.log(context)
    const docs = await getAllDocs()

    const allowed = ["01-getting-started", "join-team", "adding-users", "create-team"]

    const filteredDocs: any[] = []

    for (var i = 0; i < docs.length; i++) {
        if (allowed.includes(docs[i].slug)) {
            filteredDocs.push(docs[i])
        }
    }

    return {
        props: {
            filteredDocs
        },
    };
}

const Support = ({ filteredDocs }: { filteredDocs: any[] }) => {

    const getDocs = () => {
        const items: any[] = []

        for (var i = 0; i < filteredDocs.length; i++) {
            items.push(<DocCell docData={filteredDocs[i]} />)
        }

        return items
    }

    return <div className="">
        <Subpage props={{
            title: "How can we help?",
            tags: "team,schedule,support,help",
            content: <>
                <div className="space-y-16 md:space-y-32">
                    <Form props={{
                        bodyLabel: "What is your question?",
                    }} />

                    <div className="space-y-4">
                        <h2 className="title-sm text-center font-medium">Additional Resources</h2>
                        <div className="px-0 grid md:grid-cols-2 gap-2 md:gap-4">
                            {getDocs()}
                        </div>
                        <div className="grid place-items-center pt-4">
                            <Link href={"/docs"}><p className="text-gray-500 md:hover:opacity-50 hover:cursor-pointer transition-all">View all documentation &rarr;</p></Link>
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <h3 className="text-2xl font-bold">Didn&apos;t find what you need?</h3>
                        <p className="text-gray-500">Reach out to Support directly:</p>
                        <div className="">
                            <p>Email: <a href="mailto:support@crosschecksports" className="text-main underline hover:text-gray-400 hover:underline">support@crosschecksports.com</a></p>
                            <p>Phone: (503)--926--2641</p>
                        </div>
                    </div>
                </div>
            </>
        }} />
    </div>
}

export default Support

const HelpCell = (title: string, route: string, icon: JSX.Element, desc: string) => {
    return <>
        <Link href={route}>
            <div className="border border-gray-300 rounded-md grid place-items-start group hover:shadow-lg transition-all hover:cursor-pointer px-4 py-2">
                <div className="space-x-4 flex items-center">
                    <div className="grid place-items-center">
                        {icon}
                    </div>
                    <div className="">
                        <h3 className="text-xl text-left font-medium group-hover:text-main transition-all">{title}</h3>
                        <p className="text-gray-500">{desc}</p>
                    </div>
                </div>
            </div>
        </Link>
    </>
}