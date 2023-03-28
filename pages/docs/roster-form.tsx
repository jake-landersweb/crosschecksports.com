import Subpage from "../../components/subpage/subpage"
import Subpage2 from "../../components/subpage2"
import { saveAs } from "file-saver";
import Image from "../../components/image";

const RosterForm = () => {

    const download = (e) => {
        saveAs(
            "https://crosschecksports.com/docs/xcheck_roster_input.xlsx",
            "xcheck_roster_input.xlsx"
        );
    }

    const item = (num: number, title: string, desc: string, content: JSX.Element) => {
        return <div className="md:flex md:flex-row-reverse grid place-items-center md:justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-red-500 text-red-100 h-[75px] w-[75px] grid place-items-center rounded-md text-5xl text-semibold">{num}</div>
            <div className="space-y-2 grid place-items-center md:block">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-txt-700 max-w-xl text-center md:text-left">{desc}</p>
                <div className="">
                    {content}
                </div>
            </div>
        </div>
    }

    return <Subpage2
        title={"Roster Sheet Download"}
        src={"/svg/excel.svg"}
        alt={"Excel Sheet"}
        tags={"sports,roster,download template,excel upload,management app,sports management app"}
        desc={"Crosscheck Sports suppports downloading an excel sheet that you can fill out with your roster to upload when creating a team or a season."}
    >
        <div className=" grid place-items-center">
            <div className="max-w-2xl">
                <div className="space-y-16">
                    <h2 className="title grid place-items-center">As Easy as 1, 2, 3</h2>
                    {item(1, "Download the template", "First, download the roster template by clicking the button below.", <div>
                        <button onClick={download} className="btn-main w-min">Download</button>
                    </div>)}
                    {item(2, "Input Your Roster", "Fill in information such as emails, names, phone numbers, positions, jerseys information, and more.", <div>
                    </div>)}
                    {item(3, "Upload Your File", "Open the Crosscheck Sports mobile app, and upload your file! You can do this when creating your team or season, or by visiting the roster page on your current season.", <div>
                    </div>)}
                </div>
            </div>
        </div>
    </Subpage2>
}

export default RosterForm