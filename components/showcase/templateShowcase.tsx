import BaseShowcase from "./baseShowcase"
import { FaHockeyPuck } from 'react-icons/fa'
import { IoBasketballOutline, IoAmericanFootballOutline, IoGolfOutline, IoBaseballOutline } from 'react-icons/io5'
import { GiSoccerBall } from 'react-icons/gi'
import Image from "../image"
import { useState } from "react"

const TemplateShowcase = () => {
    const [currentSport, setCurrentSport] = useState("Hockey")

    const icon = (title: string) => {
        return <>
            <div className="">
                <button onClick={() => setCurrentSport(title)} className={`px-3 py-1 font-medium rounded-sm ${currentSport == title ? "bg-bg-700" : "hover:bg-black hover:bg-opacity-5"} cursor-pointer`}>
                    {title}
                </button>
            </div>
        </>
    }

    return <>
        <BaseShowcase props={{
            title: <>
                <h3>Start with a template.</h3>
                <h3>Then tweak it however you like.</h3>
            </>,
            description: <>
                <p>Choose from a variety of pre-defined sports,</p>
                <p>or create your own using the powerful customization engine.</p>
            </>,
            content: <>
                <div className="md:flex md:justify-between md:items-center space-y-4 md:space-y-0">
                    <div className="grid place-items-center md:block space-y-2">
                        {icon("Hockey")}
                        {icon("Basketball")}
                        {icon("Football")}
                        {icon("Golf")}
                        {icon("Soccer")}
                        {icon("Baseball")}
                    </div>
                    <div className="">
                        <Image props={{
                            src: "/images/customization_2.png",
                            alt: "positions, stats, and custom fields",
                            divClass: "max-w-[1000px]",
                            imgClass: `rounded-md border-[1px] border-gray-300 shadow-xl`
                        }} />
                    </div>
                </div>
            </>,
        }} />
    </>
}

export default TemplateShowcase