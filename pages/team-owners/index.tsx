import { GetStaticProps } from "next";
import Link from "next/link";
import { FcAutomatic, FcCalendar, FcConferenceCall, FcPlanner, FcSms } from "react-icons/fc";
import AdditionalFeatures2 from "../../components/addFeatures2";
import DocCell from "../../components/docCell";
import Feature from "../../components/feature";
import Feature3 from "../../components/feature3";
import Image from "../../components/image";
import Subpage2 from "../../components/subpage2";
import getAllDocs from "../../lib/getAllDocs";

export const getStaticProps: GetStaticProps = async (context) => {
    console.log(context)
    const docs = await getAllDocs()

    const allowed = ["custom-fields", "roster-management", "calendars", "adding-users"]

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

export default function TeamOwners({ filteredDocs }: { filteredDocs: any[] }) {

    const getDocs = () => {
        const items: any[] = []

        for (var i = 0; i < filteredDocs.length; i++) {
            items.push(<DocCell docData={filteredDocs[i]} />)
        }

        return items
    }

    const enableCell = (title: string, desc: string, icon: JSX.Element) => {
        return <div className="space-y-2 text-center">
            <div className="grid place-items-center">
                {icon}
            </div>
            <div className="">
                <h4 className="title-sub">{title}</h4>
                <p className="text-gray-400">{desc}</p>
            </div>
        </div>
    }

    return <Subpage2
        title="Tools For Team Owners"
        src="/svg/boss.svg"
        alt="Sports Schedule"
        tags="Sports team owner,sports management,sports team calendar,sports season calendar,sports roster tools"
        desc="We make operating your sports team easier. The tools Crosscheck gives you are not matched anywhere else, allowing you more free time to ENJOY your sport rather than manage it.">
        <div className="space-y-16 md:space-y-32">
            <div className="grid place-items-center space-y-16">
                <h3 className="title-sm">How We Enable Your Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 w-full">
                    {enableCell("Attendance Tracking", "We track who is going to what, and why.", <Image props={{
                        src: "/images/icons/attendance.png",
                        alt: "",
                        divClass: undefined,
                        imgClass: "h-[70px] w-[70px]"
                    }} />)}
                    {enableCell("Roster Carryover", "Creating new seasons has never been easier.", <FcConferenceCall size={70} />)}
                    {enableCell("Season Chats", "Keep team communication open on every season.", <Image props={{
                        src: "/images/icons/chat.png",
                        alt: "",
                        divClass: undefined,
                        imgClass: "h-[70px] w-[70px]"
                    }} />)}
                    {enableCell("Customization", "Colors, logos, and fields. Make the app your own.", <FcAutomatic size={70} />)}
                </div>
                {enableCell("Calendar Tools", "Import, export, and sync your calendars.", <FcCalendar size={70} />)}
            </div>
            <Feature3 props={{
                title: "Roster Approach",
                description: <div className="space-y-2">
                    <p className="text-gray-500">As one of the biggest pain points of running our own teams, we wanted to make sure our user management approach was rock solid.</p>
                    <p className="text-gray-500">Your team roster composes everyone who has ever played on your team. Season rosters and hand picked subsets from that roster. Events are an even more refined subset from the season roster.</p>
                </div>,
                assetPath: "/images/roster_management.png",
                assetAlt: "Team sports roster management",
                assetBg: "bg-main",
                reversed: false,
            }} />
            <Feature3 props={{
                title: "Attendance at a Glance",
                description: <div className="space-y-2">
                    <p className="text-gray-500">Keep track of your user&apos;s attendance reliably for each game or event. They can also leave a note to explain why they can or cannot make it.</p>
                    <p className="text-gray-500">In conjunction with custom fields, you can gather quite a bit of information from users at check-in time.</p>
                </div>,
                assetPath: "/images/event-scholastic-hockey.png",
                assetAlt: "Team sports roster management",
                assetBg: "bg-orange-400",
                reversed: true,
            }} />
            <Feature3 props={{
                title: "Powerful Customization",
                description: <div className="space-y-2">
                    <p className="text-gray-500">Crosscheck custom fields let you create custom information to track on players or gather from them on check-in time.</p>
                    <p className="text-gray-500">In addition, specifiy your own custom positions and stats to track, or choose from a template to get you started.</p>
                </div>,
                assetPath: "/images/customization_2.png",
                assetAlt: "Team sports roster management",
                assetBg: "bg-purple-400",
                reversed: false,
            }} />
            <Feature3 props={{
                title: "Customization Extended",
                description: <div className="space-y-2">
                    <p className="text-gray-500">We really want to drive home the customization that Crosscheck supports. Teams are complex, tailor the app for your use case.</p>
                    <p className="text-gray-500">Customize your app logo, light/dark mode, and accent color.</p>
                </div>,
                assetPath: "/images/cosmetic.png",
                assetAlt: "Team sports roster management",
                assetBg: "bg-grey-200",
                reversed: true,
            }} />
            <Feature3 props={{
                title: "Polls",
                description: <div className="space-y-2">
                    <p className="text-gray-500">Polls fill the gap that events and a chat leave. Ask for responses on either a true / false question, or a set of custom created options.</p>
                    <p className="text-gray-500">In addition, you can hide the total and individual responses at will.</p>
                </div>,
                assetPath: "/images/polls.png",
                assetAlt: "Team sports roster management",
                assetBg: "bg-red-400",
                reversed: false,
            }} />
            <div className="space-y-4">
                <h2 className="title-sub text-center">Recommended Documentation</h2>
                <div className="px-0 grid md:grid-cols-2 gap-2 md:gap-4">
                    {getDocs()}
                </div>
                <div className="grid place-items-center pt-4">
                    <Link href={"/docs"}><p className="text-gray-500 md:hover:opacity-50 hover:cursor-pointer transition-all">View all documentation &rarr;</p></Link>
                </div>
            </div>
        </div>
    </Subpage2>
}