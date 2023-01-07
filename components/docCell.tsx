import Link from "next/link";
import { FcApprove, FcAutomatic, FcBarChart, FcCalendar, FcCollaboration, FcConferenceCall, FcOvertime, FcPlanner, FcPrivacy, FcQuestions, FcSearch, FcSportsMode } from "react-icons/fc";

export default function DocCell({ docData }: { docData: { slug: string, data: { title: string, description: string, icon: string } } }) {

    const getIcon = () => {
        switch (docData.data.icon) {
            case "question": return <FcQuestions size={50} />
            case "chat": return <FcCollaboration size={50} />
            case "team": return <FcConferenceCall size={50} />
            case "calendar": return <FcCalendar size={50} />
            case "planner": return <FcPlanner size={50} />
            case "sport": return <FcSportsMode size={50} />
            case "lock": return <FcPrivacy size={50} />
            case "adduser": return <FcApprove size={50} />
            case "bargraph": return <FcBarChart size={50} />
            case "gear": return <FcAutomatic size={50} />
            case "search": return <FcSearch size={50} />
            default: return <FcQuestions size={50} />
        }
    }

    return <Link href={`/docs/${docData.slug}`}>
        <div className="border border-gray-300 rounded-md grid place-items-start md:place-items-center group md:hover:shadow-lg transition-all hover:cursor-pointer px-4 py-2">
            <div className="space-x-4 flex items-center">
                <div className="grid place-items-center md:group-hover:scale-110 duration-500 transition-all">
                    {getIcon()}
                </div>
                <div className="">
                    <h3 className="text-xl text-left font-medium md:group-hover:text-main transition-all">{docData.data.title}</h3>
                    <p className="text-gray-500">{docData.data.description}</p>
                </div>
            </div>
        </div>
    </Link>
}