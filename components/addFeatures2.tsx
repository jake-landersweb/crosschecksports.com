export default function AdditionalFeatures2({ features }: { features: string[] }) {

    const cell = (val: string) => {
        return <div className="flex space-x-4 items-center">
            <div className="h-1 w-2 bg-main rounded-sm"></div>
            <p className="subtext-lg">{val}</p>
        </div>
    }

    const items = () => {
        const cells: JSX.Element[] = []

        for (var i = 0; i < features.length; i++) {
            cells.push(cell(features[i]))
        }

        return cells
    }

    return <div className="space-y-8 pt-32">
        <h4 className="title-sub grid place-items-center">Additional Features</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items()}
        </div>
    </div>
}