import Link from "next/link"

type HoverMenuItemProps = {
    title: string
    href: string
    isExternal?: boolean
}

const HoverMenuItem = ({ props }: { props: HoverMenuItemProps }) => {
    const { title, href, isExternal = false } = props

    if (isExternal) {
        return <>
            <div className="">
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <div className="hover:bg-bg-700 py-2 px-4 cursor-pointer rounded-md">
                        <p>{title}</p>
                    </div>
                </a>
            </div>
        </>
    } else {
        return <>
            <Link href={href} passHref>
                <a className="">
                    <div className="hover:bg-bg-700 py-2 px-4 cursor-pointer rounded-md">
                        <p>{title}</p>
                    </div>
                </a>
            </Link>
        </>
    }
}

export default HoverMenuItem