type BaseShowcaseProps = {
    title: JSX.Element
    description: JSX.Element
    content: JSX.Element
}

const BaseShowcase = ({ props }: { props: BaseShowcaseProps }) => {
    const { title, description, content } = props
    return <>
        <div className="space-y-8 md:space-y-16">
            <div className="space-y-4">
                <div className="header">
                    {title}
                </div>
                <div className="body">
                    {description}
                </div>
            </div>
            {content}
        </div>
    </>
}

export default BaseShowcase