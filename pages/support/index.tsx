import Form from "../../components/form/form"
import Subpage from "../../components/subpage/subpage"

import { IoHelpOutline, IoShareSocialOutline, IoPeopleOutline } from 'react-icons/io5'
import { AiOutlineTeam } from 'react-icons/ai'
import { BsGear, BsCalendarWeek } from 'react-icons/bs'
import { MdOutlinePrivacyTip, MdOutlineSportsTennis } from 'react-icons/md'
import Link from "next/link"

const Support = () => {

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
                        <h2 className="title-sm">Additional Resources</h2>
                        <div className="px-0 grid grid-cols-1 gap-4">
                            {HelpCell("Getting Started", "/support/getting-started", <>
                                <IoHelpOutline size={50} className="text-main" />
                            </>, "New to Crosscheck? Check out this simple guide for getting familiar with some of the basic features of Crosscheck Sports.")}
                            {HelpCell("Creating a Team", "/support/team-create", <>
                                <IoPeopleOutline size={50} className="text-main" />
                            </>, "Check out this comprehensive guide for creating a team within Crosscheck. Learn how to customize the color, upload a logo, and more.")}
                            {HelpCell("Creating a Season", "/support/season-create", <>
                                <MdOutlineSportsTennis size={50} className="text-main" />
                            </>, "Need some help creating a season with Crosscheck? This guide will cover all of the major features seasons have to offer.")}
                            {HelpCell("Creating an Event", "/support/event-create", <>
                                <BsCalendarWeek size={50} className="text-main" />
                            </>, "Events can come in all shapes, sizes, and flavors. Learn how to make them work for your team in this guide.")}
                            {HelpCell("Privacy Policy", "/privacy-policy", <>
                                <MdOutlinePrivacyTip size={50} className="text-main" />
                            </>, "")}
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