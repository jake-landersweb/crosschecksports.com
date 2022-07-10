import { RiAppleFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { FaGlobeAmericas } from 'react-icons/fa'

type CustomAppButtonsProps = {
    title: string
}

const CustomAppButtons = ({ props }: { props: CustomAppButtonsProps }) => {
    const { title } = props

    const appButton = (route: string, name: string, icon: JSX.Element) => {
        return <>
            <a href={route} target="_blank" rel="noopener noreferrer">
                <div className="flex space-x-4 items-center rounded-md bg-bg-700 py-2 px-4 border border-gray-300 transition-all hover:opacity-50">
                    {icon}
                    <p className="text-xl font-semibold">{name}</p>
                </div>
            </a>
        </>
    }

    return <>
        <div className="space-y-8">
            <div className="space-y-2 px-4">
                <h3 className="text-2xl text-center">{title}</h3>
                <div className="h-[1px] w-full bg-gray-200"></div>
            </div>
            <div className="space-y-4 md:space-y-0 md:flex md:space-x-8">
                <div className='grid place-items-center'>
                    {appButton("https://apps.apple.com/pk/app/crosscheck-hockey/id1585600361", "App Store", <>
                        <RiAppleFill size={50} />
                    </>)}
                </div>
                <div className='grid place-items-center'>
                    {appButton("https://play.google.com/store/apps/details?id=com.landersweb.pnflutter", "Play Store", <>
                        <FcGoogle size={50} />
                    </>)}
                </div>
                <div className='grid place-items-center'>
                    {appButton("https://teams.crosschecksports.com", "Crosscheck", <>
                        <FaGlobeAmericas size={50} className="text-main" />
                    </>)}
                </div>
            </div>
        </div>
    </>

}

export default CustomAppButtons