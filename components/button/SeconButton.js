import React from 'react'
import css from "./SeconButton.module.scss"

export default function SeconButton({ text }) {
    return (
        <button id={css.button}>{text}</button>
    )
}
