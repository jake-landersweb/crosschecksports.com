import Link from 'next/link'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import HeaderItem from './headerItem';
import HoverMenu from '../hoverMenu/hoverMenu';
import { isExternal } from 'util/types';
import Image from '../image';
import HoverMenuType from '../hoverMenu/hoverMenuType';
import HoverMenuItem from '../hoverMenu/hoverMenuItem';

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen);
    }


    const closeMenu = () => {
        setIsOpen(false);
    };

    const menu = (className: string) => {
        return <div className={className}>
            <div className="">
                <HeaderItem props={{
                    route: '#download',
                    title: 'Download Now',
                    onTap: () => closeMenu(),
                    isCollapsed: scrollY > 50,
                    className: "bg-main hover:bg-main hover:bg-opacity-100 bg-opacity-30 text-main hover:text-white",
                    isExternal: false,
                }} />
            </div>
        </div>
    }


    return (
        <div className={`${scrollY > 50 ? "bg-bg-800 shadow-md" : "bg-bg bg-opacity-50 backdrop-blur-sm md:py-4"} py-2 items-center w-screen grid place-items-center transition-all duration-300 fixed top-0 left-0`}>
            <div className="flex items-center justify-between max-w-[2000px] w-full px-2 lg:px-20 md:px-10">
                <div className="flex space-x-4 w-full">
                    <div className="">
                        <Link href="/">
                            <a onClick={(e) => closeMenu()}>
                                <div className="group flex items-center transition-all">
                                    {/* image can go here */}
                                    <Image props={{
                                        src: '/svg/xcheck_blue_text_dark.svg',
                                        alt: 'crosscheck sports logo',
                                        divClass: "h-[40px]",
                                        imgClass: "h-[40px]"
                                    }} />
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="hidden md:flex justify-around w-full">
                        <HoverMenu props={{
                            title: "Features",
                            defaultLink: "#features",
                            type: HoverMenuType.header,
                            content: <div className=''>
                                <HoverMenuItem props={{
                                    title: 'Schedule Management',
                                    href: '/schedule-management',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Roster Management',
                                    href: '/roster-management',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Customization',
                                    href: '/customization',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Communication',
                                    href: '/communication',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Merchandise',
                                    href: '/merchandise',
                                    isExternal: false,
                                }} />
                                {/* <HoverMenuItem props={{
                                    title: 'Stats',
                                    href: '/stats',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Lineups',
                                    href: '/lineups',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Multiple Seasons',
                                    href: '/multiple-seasons',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Polls',
                                    href: '/polls',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Checkin Notifications',
                                    href: '/checkin-notifications',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Schedule Export',
                                    href: '/schedule-export',
                                    isExternal: false,
                                }} /> */}
                            </div>
                        }} />
                        {/* <HoverMenu props={{
                            title: "Sports",
                            defaultLink: "#sports",
                            type: HoverMenuType.header,
                            content: <div className=''>
                                <HoverMenuItem props={{
                                    title: 'Ice Hockey',
                                    href: '/ice-hockey',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Golf',
                                    href: '/golf',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Basketball',
                                    href: '/basketball',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Football',
                                    href: '/football',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Soccer',
                                    href: '/soccer',
                                    isExternal: false,
                                }} />
                                <HoverMenuItem props={{
                                    title: 'Baseball',
                                    href: '/baseball',
                                    isExternal: false,
                                }} />
                            </div>
                        }} /> */}
                        <HeaderItem props={{
                            route: '/support',
                            title: 'Support',
                            onTap: () => closeMenu(),
                            isCollapsed: scrollY > 50
                        }} />
                        <HeaderItem props={{
                            route: '#download',
                            title: 'Download',
                            onTap: () => closeMenu(),
                            isCollapsed: scrollY > 50
                        }} />
                        <HeaderItem props={{
                            route: 'https://teams.crosschecksports.com',
                            title: 'Login',
                            onTap: () => closeMenu(),
                            isExternal: true,
                            isCollapsed: scrollY > 50
                        }} />
                    </div>
                </div>
                {/* Mobile menu */}
                {isOpen ? (
                    <button onClick={handleClick} className={`md:hidden text-txt-400 w-10 h-10 focus:outline-none fixed right-2 z-50`}>
                        <span className="sr-only">Open main menu</span>
                        <div
                            className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                            <span aria-hidden="true" className={`${isOpen ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                            <span aria-hidden="true"
                                className={`${isOpen ? 'opacity-0' : ''}  block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out`}></span>
                            <span aria-hidden="true"
                                className={`${isOpen ? "-rotate-45" : "translate-y-1.5"}  block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
                        </div>
                    </button>
                ) : (
                    <button onClick={handleClick} className={`md:hidden text-txt-400 w-10 h-10 relative focus:outline-none z-50`}>
                        <span className="sr-only">Open main menu</span>
                        <div
                            className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                            <span aria-hidden="true" className={`${isOpen ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                            <span aria-hidden="true"
                                className={`${isOpen ? 'opacity-0' : ''}  block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out`}></span>
                            <span aria-hidden="true"
                                className={`${isOpen ? "-rotate-45" : "translate-y-1.5"}  block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
                        </div>
                    </button>
                )}
                <div
                    className={`top-0 right-0 w-[75vw] pt-[75px] space-y-2 px-2 bg-bg-800 fixed h-screen z-40 ease-in-out duration-300 ${isOpen ? "translate-x-0 " : "translate-x-full"}`}>
                    <div className="space-y-2">
                        <div className="space-y-2">
                            <div className="">
                                <HeaderItem props={{
                                    route: '/schedule-management',
                                    title: 'Schedule Management',
                                    onTap: () => closeMenu(),
                                    isCollapsed: scrollY > 50
                                }} />
                            </div>
                            <div className="">
                                <HeaderItem props={{
                                    route: '/roster-management',
                                    title: 'Roster Management',
                                    onTap: () => closeMenu(),
                                    isCollapsed: scrollY > 50
                                }} />
                            </div>
                            <div className="">
                                <HeaderItem props={{
                                    route: '/customization',
                                    title: 'Customization',
                                    onTap: () => closeMenu(),
                                    isCollapsed: scrollY > 50
                                }} />
                            </div>
                            <div className="">
                                <HeaderItem props={{
                                    route: '/communication',
                                    title: 'Communication',
                                    onTap: () => closeMenu(),
                                    isCollapsed: scrollY > 50
                                }} />
                            </div>
                            <div className="">
                                <HeaderItem props={{
                                    route: '/merchandise',
                                    title: 'Merchansise',
                                    onTap: () => closeMenu(),
                                    isCollapsed: scrollY > 50
                                }} />
                            </div>
                            <div className="">
                                <HeaderItem props={{
                                    route: '/support',
                                    title: 'Support',
                                    onTap: () => closeMenu(),
                                    isCollapsed: scrollY > 50
                                }} />
                            </div>
                            <div className="">
                                <HeaderItem props={{
                                    route: 'https://teams.crosschecksports.com',
                                    title: 'Login',
                                    isExternal: true,
                                    onTap: () => closeMenu(),
                                    isCollapsed: scrollY > 50
                                }} />
                            </div>
                        </div>
                    </div>
                    {menu("space-y-2")}
                </div>
            </div>
        </div>
    )
}

export default Header