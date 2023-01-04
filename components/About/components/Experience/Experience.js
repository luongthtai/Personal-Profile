import React from 'react'
import css from "./Experience.module.scss"
import TitleSection from '../../../TitleSection/TitleSection'
import ExperienceItem from './components/ExperienceItem'

export default function Experience() {
    return (
        <section id={css.experience}>
            <TitleSection title="EXPERIENCE."/>

            <div id={css.experienceItems}>
                <ExperienceItem />
                <ExperienceItem />
                <ExperienceItem />
            </div>
        </section>
    )
}
