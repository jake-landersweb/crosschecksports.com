import Link from "next/link"
import Image from "../image"
import AppButtons from "../mobileButtons/appButtons"

const Footer = () => {
    return <div id="download" className="">
        <div className="bg-gray-300 h-[0.5px] w-full"></div>
        <div className="grid place-items-center py-8">
            <div className="">
                <div className="grid place-items-center">
                    <Image props={{
                        src: '/svg/xcheck_blue.svg',
                        alt: 'crosscheck sports logo',
                        divClass: "h-[100px] w-[100px]",
                        imgClass: undefined
                    }} />
                    <h3 className='hidden md:block header'>Download Crosscheck</h3>
                    <div className="md:hidden grid place-items-center header">
                        <h3>Download</h3>
                        <h3>Crosscheck</h3>
                    </div>
                    <div className="pt-4">
                        <AppButtons />
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-bg-800 p-8 divide-y w-full">
            <div className="grid place-items-center">
                <h4 className="m-8">
                    Powered by Landersweb
                </h4>
            </div>
        </div>
    </div>
}

export default Footer