import React from 'react'
import css from "./EducationItem.module.scss"

export default function EducationItem({time, name, info}) {
    return (
        <div id={css.root}>
            <div id={css.times}>
                <p>{time || "2010-2012"}</p>
            </div>
            <div id={css.content}>
                <h4>{name || "Graphic Designer"}</h4>
                <p>{info || "Internatinal Design Institute"}</p>
            </div>
        </div>
    )
}
