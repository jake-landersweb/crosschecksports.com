import Link from 'next/link'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import HeaderItem from './headerItem';
import HoverMenu from '../hoverMenu/hoverMenu';
import { isExternal } from 'util/types';
import Image from '../image';

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
        <div className={`${scrollY > 50 ? "bg-bg-800 shadow-md py-2" : "bg-bg py-4 bg-opacity-50 backdrop-blur-sm"} items-center w-screen grid place-items-center transition-all duration-300`}>
            <div className="flex items-center justify-between max-w-[2000px] w-full px-2 lg:px-20 md:px-10">
                <div className="flex space-x-4">
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

                    <div className="hidden md:flex">
                        <HoverMenu props={{
                            label: <>
                                <HeaderItem props={{
                                    route: '/',
                                    title: 'Features',
                                    onTap: () => closeMenu(),
                                    isCollapsed: scrollY > 50
                                }} />
                            </>,
                            titles: ["Control", "Communication", "Customization"],
                            routes: ["/control", "/communication", "/custom"],
                        }} />
                        {/* <HeaderItem props={{
                            route: '/why-crosscheck',
                            title: 'Why Crosscheck?',
                            onTap: () => closeMenu(),
                            isCollapsed: scrollY > 50
                        }} /> */}
                        <HeaderItem props={{
                            route: '/support',
                            title: 'Support',
                            onTap: () => closeMenu(),
                            isCollapsed: scrollY > 50
                        }} />
                    </div>
                </div>
                {/* The full sized menu */}
                {menu("hidden md:flex space-x-2")}
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
                    className={`top-0 right-0 w-[75vw] pt-[100px] space-y-2 px-2 bg-bg-800 fixed h-screen z-40 ease-in-out duration-300 ${isOpen ? "translate-x-0 " : "translate-x-full"}`}>
                    <div className="space-y-2">
                        <div className="space-y-2">
                            <div className="">
                                <HeaderItem props={{
                                    route: '/team-control',
                                    title: 'Team Control',
                                    onTap: () => closeMenu(),
                                    isCollapsed: scrollY > 50
                                }} />
                            </div>
                            <div className="">
                                <HeaderItem props={{
                                    route: '/custom',
                                    title: 'Customization',
                                    onTap: () => closeMenu(),
                                    isCollapsed: scrollY > 50
                                }} />
                            </div>
                            <div className="">
                                <HeaderItem props={{
                                    route: '/social',
                                    title: 'Social',
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
                        </div>
                    </div>
                    {menu("space-y-2")}
                </div>
            </div>
        </div>
    )
}

export default Header