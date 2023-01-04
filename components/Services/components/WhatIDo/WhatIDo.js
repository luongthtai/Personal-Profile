import React from 'react'
import TitleSection from '../../../TitleSection/TitleSection'
import ServicesItem from './components/IDoItem'
import css from "./WhatIDo.module.scss"

export default function WhatIDo() {
    return (
        <div id={css.iDo}>
            <TitleSection title="WHAT I DO ?" />

            <div id={css.lists}>
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
            </div>
        </div>
    )
}
