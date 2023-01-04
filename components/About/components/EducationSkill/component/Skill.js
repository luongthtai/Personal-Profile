import React from 'react'
import css from "./Skill.module.scss"

export default function Skill({ skill, percent }) {
    return (
        <div id={css.skill}>
            <h5>{skill || "HTML5"}</h5>
            
            <div id={css.skillItem}>
                <div id={css.percent} style={{width: percent || 0}}></div>
            </div>
        </div>
    )
}
