import Image from "../../../components/image"
import InfoCell from "../../../components/infoCell"
import Link from "../../../components/link"
import Subpage from "../../../components/subpage/subpage"

const TeamCreate = () => {

    return <div className="my-32 mx-2 grid place-items-center">
        <Link props={{
            href: "https://jakelanders.com/blog/11-creating-a-sports-team-with-crosscheck-sports",
            child: <div className="overflow-clip rounded-lg border border-bg-700 space-y-4 max-w-[700px] group md:hover:bg-bg-700 transition-all">
                <Image props={{
                    src: "/images/create-team-article.png",
                    alt: "Create Team Article Thumbnail",
                    divClass: "md:group-hover:scale-105 transition-all",
                    imgClass: ""
                }} />
                <div className="p-4">
                    <h3 className="title-sub">How To Create a Team With Crosscheck Sports</h3>
                    <p className="subtext">Follow along this article for a comprehensive overview on how to create a team with Crosscheck Sports &rarr;</p>
                </div>
            </div>,
            isExternal: true,
            className: ""
        }} />
    </div>
}

export default TeamCreate