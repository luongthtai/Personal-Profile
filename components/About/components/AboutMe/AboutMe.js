import React from 'react'
import css from "./AboutMe.module.scss"
import Image from 'next/image'
import PrimaryButton from '../../../button/PrimaryButton'
import TitleSection from '../../../TitleSection/TitleSection'
import images from '../../../../constants/image'

export default function AboutMe() {

  return (
    <>
      <section id="about" className={css.aboutMe}>
        <div id={css.image}>
          <Image src={images.image4} alt="info1"/>
          <Image src={images.image2} alt="info2"/>
          <Image src={images.image3} alt="info3"/>
          <Image src={images.image4} alt="info4"/>
        </div>

        <div id={css.contents}>
          <TitleSection title="ABOUT ME." />
          <div id={css.heroContent}>
            <h3>I`m a Freelancer Front-end Developer with over 1 years of experience.</h3>

            <p>I`m a Freelancer Front-end Developer with over 3 years of experience. I`m from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
          </div>

          <div id={css.data}>
            <div>
              <p id={css.number}>5k</p>
              <p>Projects Completed.</p>
            </div>

            <div>
              <p id={css.number}>3K</p>
              <p>Satisfied Clients.</p>
            </div>
          </div>

          <div id={css.contact}>
            <PrimaryButton text="Contact Me" />
            <PrimaryButton text="Portfolio" />
          </div>
        </div>
      </section>
    </>
  )
}
