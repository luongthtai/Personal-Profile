import React from 'react'
import css from "./IDoItem.module.scss"
import { MdOutlineDevices } from "react-icons/md"

export default function ServicesItem({ icon, title }) {
    return (
        <div id={css.root}>
            <div id={css.icon}>{icon || <MdOutlineDevices />}</div>
            <div id={css.contents}>
                <h4>{title || "Web Design"}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}
