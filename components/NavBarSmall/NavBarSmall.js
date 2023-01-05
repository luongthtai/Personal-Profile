import React from 'react'
import css from "./NavBarSmall.module.scss"
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

export default function NavBarSmall() {
    return (
        <div id={css.root}>
            <Link href="#heroSection">
                <h1>THE TAI</h1>
            </Link>

            <div id={css.menu}>
                <AiOutlineMenu />
            </div>
        </div>
    )
}
