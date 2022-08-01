const InfoCell = ({ label, body }: { label: string, body: JSX.Element }) => {
    return <>
        <div className="space-y-2">
            <h3 className="label">{label}</h3>
            <div className="body space-y-2">{body}</div>
        </div>
    </>
}

export default InfoCell