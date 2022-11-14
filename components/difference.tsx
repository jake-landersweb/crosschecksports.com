import Image from "./image"
import Link from "./link"

export default function Difference() {
    const cell = (idx: number, title: string, desc: string) => {
        return <div className="grid place-items-center">
            <p className="text-6xl text-main font-black">{idx}</p>
            <h4 className="title-sub text-center">{title}</h4>
            <p className="subtext text-center max-w-xl">{desc}</p>
        </div>
    }



    return <div className="space-y-8 md:space-y-10">
        <div className=" grid place-items-center space-y-2">
            <h2 className="title-sm text-center">What Makes Crosscheck Different?</h2>
            <p className="subtext-lg text-center max-w-2xl flex">There are many sports management applications out there, what do we offer compared to the competition? Our approach is simple, and can be summarized in 3 steps.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
            {cell(1, "Features", "We pack more features into our app compared to the competition. From chat rooms, custom fields, to merchandise.")}
            {cell(2, "Appearance", "Our competitors use websites wrapped into apps. We use native mobile apps. An app that 'feels' right is used by your team.")}
            {cell(3, "Generosity", "Base features to run your team successfully are free forever. When you like it, our pay layer adds unique features.")}
        </div>
    </div>
}