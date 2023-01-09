import React, { useRef, useState } from 'react'
import css from "./PrimaryButton.module.scss"

export default function PrimaryButton({ text }) {
    const ref = useRef()

    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
    })

    const handleMount = (e) => {
        const buttonWidth = ref.current.offsetWidth / 2
        const buttonHeight = ref.current.offsetHeight / 2

        const location = { buttonHeight, buttonWidth }

        if
            (e.nativeEvent.offsetX < location.buttonWidth ||
            e.nativeEvent.offsetY < location.buttonHeight) {
            setMouse({
                x: -e.nativeEvent.offsetX + (location.buttonWidth),
                y: -e.nativeEvent.offsetY + (location.buttonHeight)
            })
        } else {
            setMouse({
                x: - location.buttonWidth,
                y: - location.buttonHeight
            })
        }
    }

    const style = {
        transform: `perspective(200px) rotateX(${mouse.y / 3 + "deg"}) rotateY(${mouse.x / 3 + "deg"})`
    }

    return (
        <button id={css.button} style={style} onMouseMove={(e) => handleMount(e)} onMouseOut={() => setMouse({ x: 0, y: 0 })} ref={ref}>{text}</button>
    )
}
