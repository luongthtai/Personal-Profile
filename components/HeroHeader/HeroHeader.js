import React, { useState } from 'react'
import css from "./HeroHeader.module.scss"
import avatar from "../../public/images/client1.jpg"
import Image from 'next/image'
import {BsFillMoonFill} from "react-icons/bs"
import PrimaryButton from '../button/PrimaryButton'

export default function HeroHeader() {
  const [effect, setEffect] = useState("Web Developer")

  return (
    <section className={css.heroHeader} id="heroSection">
      <div id={css.heroHeaderContent}>
        <div id={css.heroText}>
          <h3>Hello, I am</h3>

          <h1>Luong The Tai</h1>

          <p id={css.animate}>I am Passionate
            <span id="effect"> {effect}</span>
          </p>

          <p id={css.titleContents}>
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
          </p>
        </div>

        <PrimaryButton text="Donwload CV" />
      </div>

      <div id={css.heroImage}>
        <Image
          src={avatar}
          alt='Luong The Tai'
        />
      </div>

      <div id={css.changeTheme}>
        <BsFillMoonFill />
      </div>
    </section>
  )
}
