import Feature from "../feature"
import Form from "../form/form"
import Image from "../image"
import BaseShowcase from "./baseShowcase"

const CustomShowcase = () => {
    return <>
        <BaseShowcase props={{
            title: <>
                <h3>Want something more? Let the</h3>
                <h3>Crosscheck team tailor-make a product for you.</h3>
            </>,
            description: <>
                <p>From custom websites to mobile apps, if you feel</p>
                <p>your team could benefit from a custom solution, contact us!</p>
            </>,
            content: <>
                <div className="lg:flex lg:flex-row-reverse items-center">
                    <div className="">
                        <Image props={{
                            src: "/images/puck_norris_site.png",
                            alt: "custom sports team site",
                            divClass: "max-w-[1000px]",
                            imgClass: `rounded-md border-[1px] border-gray-300 shadow-xl bg-pn bg-opacity-30`
                        }} />
                    </div>
                    <div className="pt-8 lg:pt-0 lg:pr-8">
                        <Form />
                    </div>
                </div>
            </>
        }} />
    </>
}

export default CustomShowcase