import Link from "../link"
import HoverMenuItem from "./hoverMenuItem"
import HoverMenuType from "./hoverMenuType"

type HoverMenuProps = {
    title: string
    defaultLink: string
    type: HoverMenuType
    content: JSX.Element
}

const HoverMenu = ({ props }: { props: HoverMenuProps }) => {
    const { title, defaultLink, type, content } = props

    const titleClass = () => {
        switch (type) {
            case HoverMenuType.header: return "headerItem"
            case HoverMenuType.action: return ""
            case HoverMenuType.sub: return ""
        }
    }

    return <>
        <div className="grid place-items-center ">
            <div className="group h-min place-items-center">
                <Link props={{
                    href: defaultLink,
                    child: <div className="flex items-center md:group-hover:bg-bg-700 cursor-pointer transition-all rounded-md pr-2">
                        <h3 className={titleClass()}>{title}</h3>
                        <svg className={`h-6 w-6`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </div>,
                    isExternal: false,
                    className: ""
                }} />
                <ul className="z-50 w-fit max-w-[500px] min-w-[250px] mx-auto absolute invisible opacity-0 group-hover:opacity-100 scale-[.8] group-hover:scale-100 group-hover:visible transition-all duration-75">
                    <div className="h-1 bg-transparent"></div>
                    <div className="overflow-y-scroll max-h-[75vh] border-t-8 border-t-main rounded-md bg-bg shadow-xl space-y-4">
                        <div className="p-2">
                            {content}
                        </div>
                    </div>
                </ul>
            </div>
        </div>

    </>
}

export default HoverMenu