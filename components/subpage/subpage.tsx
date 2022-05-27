type SubpageProps = {
    title: string
    content: JSX.Element
}

const Subpage = ({ props }: { props: SubpageProps }) => {
    return <>
        <div className="grid place-items-center">
            <div className="max-w-[1000px] w-full space-y-8 md:space-y-32">
                <div className="grid place-items-center">
                    <h2 className="text-4xl md:text-6xl md:pt-[50px] font-medium">{props.title}</h2>
                </div>
                {props.content}
            </div>
        </div>
    </>
}

export default Subpage