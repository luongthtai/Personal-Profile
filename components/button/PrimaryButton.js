import React from 'react'
import css from "./PrimaryButton.module.scss"

export default function PrimaryButton({ text }) {
    return (
        <button id={css.button}>{text}</button>
    )
}
