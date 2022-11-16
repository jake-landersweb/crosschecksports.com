import { IoStatsChart, IoSnow, IoNotificationsOutline, IoCalendarOutline } from 'react-icons/io5'
import { AiOutlineAlignLeft } from 'react-icons/ai'
import { CgPoll } from 'react-icons/cg'
import Link from './link'

export default function AdditionalFeatures() {

    const cell = (title: string, href: string, icon: JSX.Element, desc: string) => {
        // return <Link props={{
        //     href: href,
        //     child: <div className="flex space-x-4 items-center">
        //         <div className="p-4 bg-main bg-opacity-30 rounded-full text-main">
        //             {icon}
        //         </div>
        //         <div className="">
        //             <h3 className="title-sub">{title}</h3>
        //             <p className="subtext max-w-xl">{desc}</p>
        //         </div>
        //     </div>,
        //     isExternal: false,
        //     className: "p-4 rounded-md border border-gray-200 md:hover:bg-gray-100 md:hover:cursor-pointer transition-all"
        // }} />
        return <div className="flex space-x-4 items-center p-4 rounded-md border border-gray-200 md:hover:bg-gray-100 transition-all">
            <div className="p-4 bg-main bg-opacity-30 rounded-full text-main">
                {icon}
            </div>
            <div className="">
                <h3 className="title-sub">{title}</h3>
                <p className="subtext max-w-xl">{desc}</p>
            </div>
        </div>
    }

    return <div className="space-y-4">
        <div className="space-y-2 grid place-items-center">
            <h2 className='title-sm text-center'>Additional Features</h2>
            <p className='subtext-lg text-center'>By all means not a comprehensive list, but can give you a taste of what to expect.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
            {cell("Stats", "/stats", <IoStatsChart size={30} />, "Keep track of your stats from game to game, season to season, and all time on a team!")}
            {cell("Lineups", "/lineups", <AiOutlineAlignLeft size={30} />, "Configure a custom lineup for each game. Use pre-generated templates, or old lineups.")}
            {cell("Multiple Seasons", "/seasons", <IoSnow size={30} />, "Multiple active seasons for multiple different leagues all at the same time.")}
            {cell("Polls", "/polls", <CgPoll size={30} />, "Grab any extra information from your team that you need through a robust polling system.")}
            {cell("Check-in Notifications", "/notifications", <IoNotificationsOutline size={30} />, "We automatically send email and mobile notification reminders for your games.")}
            {cell("Schedule Export", "/schedule-export", <IoCalendarOutline size={30} />, "Your players can export the Crosscheck app schedule into their personal calendars.")}
        </div>
    </div>
}