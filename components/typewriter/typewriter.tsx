import { useEffect, useState } from "react"
import styles from './typewriter.module.css'

type TypewriterProps = {
    values: string[]
    className: string
    cursorClass?: string
    step?: number
    pause1?: number
    pause2?: number
    infinite?: boolean
}

export default function TypeWriter({ props }: { props: TypewriterProps }) {
    const [val, setVal] = useState("")

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    useEffect(() => {
        run(0)
    }, [])

    const run = async (index: number) => {
        for (var i = 1; i <= props.values[index].length; i++) {
            setVal(props.values[index].substring(0, i))
            await sleep(props.step ?? 100)
        }
        if (props.infinite) {
            await sleep(props.pause1 ?? 1500)
            for (var i = props.values[index].length; i >= 0; i--) {
                setVal(props.values[index].substring(0, i))
                await sleep((props.step ?? 100) / 2)
            }
            await sleep(props.pause2 ?? 250)
            run(index == props.values.length - 1 ? 0 : index + 1)
        }
    }

    return <span className={props.className}>{val}<span className={`${styles.cursor} ${props.cursorClass ?? ""}`}>|</span></span>
}