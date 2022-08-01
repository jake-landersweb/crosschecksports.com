import Form from "../../components/form/form"
import Subpage from "../../components/subpage/subpage"

import { IoHelpOutline, IoShareSocialOutline, IoPeopleOutline } from 'react-icons/io5'
import { AiOutlineTeam } from 'react-icons/ai'
import { BsGear, BsCalendarWeek } from 'react-icons/bs'
import { MdOutlinePrivacyTip, MdOutlineSportsTennis } from 'react-icons/md'
import Link from "next/link"
import Head from "next/head"

const Support = () => {


    return <>
        <Subpage props={{
            title: "How can we help?",
            tags: "team,schedule,support,help",
            content: <>
                <div className="space-y-16 md:space-y-32">
                    <Form props={{
                        bodyLabel: "What is your question?",
                    }} />
                    <div className="px-0 sm:px-16 md:px-0 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                        {HelpCell("Getting Started", "/support/getting-started", <>
                            <IoHelpOutline size={50} className="text-main" />
                        </>)}
                        {HelpCell("Creating a Team", "/support/team-create", <>
                            <IoPeopleOutline size={50} className="text-main" />
                        </>)}
                        {HelpCell("Creating a Season", "/support/season-create", <>
                            <MdOutlineSportsTennis size={50} className="text-main" />
                        </>)}
                        {HelpCell("Creating an Event", "/support/event-create", <>
                            <BsCalendarWeek size={50} className="text-main" />
                        </>)}
                        {HelpCell("Team Control", "/control", <>
                            <AiOutlineTeam size={50} className="text-main" />
                        </>)}
                        {HelpCell("Customization", "/custom", <>
                            <BsGear size={50} className="text-main" />
                        </>)}
                        {HelpCell("Social", "/communication", <>
                            <IoShareSocialOutline size={50} className="text-main" />
                        </>)}
                        {HelpCell("Privacy Policy", "/privacy-policy", <>
                            <MdOutlinePrivacyTip size={50} className="text-main" />
                        </>)}
                    </div>
                </div>
            </>
        }} />
    </>
}

export default Support

const HelpCell = (title: string, route: string, icon: JSX.Element) => {
    return <>
        <Link href={route}>
            <div className="border border-gray-300 rounded-md aspect-square grid place-items-center group hover:shadow-lg transition-all hover:cursor-pointer">
                <div className="space-y-4">
                    <div className="grid place-items-center">
                        {icon}
                    </div>
                    <h3 className="text-xl font-medium group-hover:text-main transition-all grid place-items-center">{title}</h3>
                </div>
            </div>
        </Link>
    </>
}