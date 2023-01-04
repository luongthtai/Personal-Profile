import React from 'react'
import css from "./ExperienceItem.module.scss"
import Image from 'next/image'
import logo1 from "../../../../../public/images/logo1.png"
import SeconButton from '../../../../button/SeconButton'

export default function ExperienceItem() {
    return (
        <div id={css.root}>
            <div id={css.image}>
                <Image src={logo1} alt="logo" />
            </div>

            <div id={css.items}>
                <div id={css.title}>
                    <div>
                        <h4>Front-end Developer</h4>
                        <p>WeLab | remote | Jan 2019 - Present</p>
                    </div>
                    <SeconButton text="FULL TIME" />
                </div>

                <div id={css.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                </div>
            </div>
        </div>
    )
}
