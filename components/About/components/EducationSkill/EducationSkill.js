import React from 'react'
import css from "./EducationSkill.module.scss"
import EducationItem from './component/EducationItem'
import TitleSection from '../../../TitleSection/TitleSection'
import Skill from './component/Skill'

export default function EducationSkill() {
    return (
        <section className={css.educationSkill}>
            <TitleSection title="EDUCATION & SKILLS" />

            <div id={css.container}>
                <div id={css.education}>
                    <EducationItem />
                    <EducationItem />
                    <EducationItem />
                </div>

                <div id={css.skill}>
                    <h3>My skills</h3>
                    <p>I`m a Freelancer Front-end Developer with over 3 years of experience. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>

                    <div id={css.skillItems}>
                        <Skill skill="HTML5" percent="85%" />
                        <Skill skill="CSS" percent="80%" />
                        <Skill skill="JAVASCRIPT" percent="50%" />
                        <Skill skill="REACT JS" percent="60%" />
                    </div>
                </div>
            </div>
        </section>
    )
}
