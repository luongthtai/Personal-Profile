import React from 'react'
import css from "./TestimonialItem.module.scss"
import Image from 'next/image'
import client from "../../../../../public/images/client1.jpg"

export default function TestimonialItem() {
    return (
        <div id={css.root}>
            <div id={css.image}>
                <Image src={client} alt="clientName" />
            </div>

            <div id={css.content}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div id={css.info}>
                    <h4>Luong The Tai</h4>
                    <p id={css.text}>CEO at CCCC</p>
                </div>
            </div>
        </div>
    )
}
