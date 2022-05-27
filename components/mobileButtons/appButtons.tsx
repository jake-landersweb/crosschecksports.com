import Image from "../image"
import MobileStoreButton from "./mobileButton"

const AppButtons = () => {
    return <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
            <MobileStoreButton props={{
                store: "ios",
                url: "https://apps.apple.com/pk/app/crosscheck-hockey/id1585600361",
            }} />
            <MobileStoreButton props={{
                store: "android",
                url: "https://play.google.com/store/apps/details?id=com.landersweb.pnflutter",
            }} />
            <a href="https://teams.crosschecksports.com" target="_blank" rel="noopener noreferrer" className="bg-black border-gray-400 border-[1px] rounded-md md:ml-4">
                <div className="flex space-x-2 items-center h-[60px] px-2">
                    <Image props={{
                        src: "/svg/xcheck_blue.svg",
                        alt: "Crosscheck Logo",
                        divClass: "max-w-[50px]"
                    }} />
                    <div className="space-y-[-5px] text-white">
                        <p className="text-sm font-light tracking-wide">Visit the web</p>
                        <p className="text-2xl font-medium tracking-wide">Crosscheck</p>
                    </div>
                </div>
            </a>
        </div>
    </>
}

export default AppButtons