import React from 'react'
import css from "./About.module.scss"
import AboutMe from './components/AboutMe/AboutMe'
import EducationSkill from './components/EducationSkill/EducationSkill.js'
import Experience from './components/Experience/Experience'

export default function About() {

  return (
    <>
      <section id="about" className={css.about}>
        <AboutMe />
        <EducationSkill />
        <Experience />
      </section>
    </>
  )
}
