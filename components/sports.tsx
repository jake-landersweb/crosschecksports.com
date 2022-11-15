import Image from "./image"
import Link from "./link"

export default function Sports() {
    const cell = (title: string, src: string, alt: string, href: string) => {
        return <div className="space-y-2 flex flex-col items-center">
            {/* <div className="p-4 bg-main bg-opacity-30 rounded-full"> */}
            <Image props={{
                src: src,
                alt: alt,
                divClass: "",
                imgClass: "h-[45px] w-[45px]"
            }} />
            {/* </div> */}
            <Link props={{
                href: href,
                child: <h3>{title}</h3>,
                isExternal: false,
                className: "subtext-lg md:hover:text-main md:hover:underline transition-all"
            }} />
        </div>
    }

    return <div id="sports" className="space-y-8 md:px-16">
        <div className="space-y-2 grid place-items-center">
            <h2 className="title-sm text-center">Sport Templates</h2>
            <p className="subtext-lg max-w-2xl text-center">These are the sports we support out of the box. If the sport you play is not in this list, no worry! All of these templates were created using the base features of Crosscheck, and are completely re-creatable. <a href="/support/team-create/" className="underline md:hover:no-underline md:hover:text-main transition-all hover:cursor-pointer">Learn how to create a sports team here.</a></p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            {cell("Ice Hockey", "/svg/hockey.svg", "Hockey Puck", "/ice-hockey")}
            {cell("Golf", "/svg/golf.svg", "Golf Ball", "/golf")}
            {cell("Basketball", "/svg/basketball.svg", "Basketball", "/basketball")}
            {cell("Football", "/svg/football.svg", "Football", "/football")}
            {cell("Soccer", "/svg/soccer.svg", "Soccer Ball", "/soccer")}
            {cell("Baseball", "/svg/baseball.svg", "Baseball Bat", "/baseball")}
        </div>
    </div>
}