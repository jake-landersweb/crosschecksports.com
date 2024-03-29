import Link from "next/link"
import Image from "./image"


export default function Sports() {
    const cell = (title: string, src: string, alt: string, href: string) => {
        return <div className="space-y-2 flex flex-col items-center">
            {/* <div className="p-4 bg-main bg-opacity-30 rounded-full"> */}
            <Image props={{
                src: src,
                alt: alt,
                divClass: "",
                imgClass: "h-[75px] w-[75px]"
            }} />
            {/* </div> */}
            {/* <Link props={{
                href: href,
                child: <h3>{title}</h3>,
                isExternal: false,
                className: "subtext-lg md:hover:text-main md:hover:underline transition-all"
            }} /> */}
            <h3 className="subtext-lg">{title}</h3>
        </div>
    }

    return <div id="sports" className="space-y-8 md:px-16 bg-bg backdrop-blur-lg bg-opacity-30 rounded-[20px] p-4">
        <div className="space-y-2 grid place-items-center">
            <h2 className="title-sm text-center">Sport Templates</h2>
            <p className="subtext-lg max-w-2xl text-center">These are the sports we support out of the box. If the sport you play is not in this list, no worry! All of these templates were created using the base features of Crosscheck, and are completely re-creatable. <Link passHref href="/support/team-create/"><a className="underline md:hover:no-underline md:hover:text-main transition-all hover:cursor-pointer">Learn how to create a sports team here.</a></Link></p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            {cell("Ice Hockey", "/images/icons/ice-hockey.png", "Hockey Puck", "/ice-hockey")}
            {cell("Golf", "/images/icons/golf.png", "Golf Ball", "/golf")}
            {cell("Basketball", "/images/icons/basketball.png", "Basketball", "/basketball")}
            {cell("Football", "/images/icons/football.png", "Football", "/football")}
            {cell("Soccer", "/images/icons/soccer.png", "Soccer Ball", "/soccer")}
            {cell("Baseball", "/images/icons/baseball.png", "Baseball Bat", "/baseball")}
        </div>
    </div>
}