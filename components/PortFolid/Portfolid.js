import React from 'react'
import css from "./Portfolid.module.scss"
import TitleSection from '../TitleSection/TitleSection'
import Category from './components/Category'

export default function Portfolid() {
  return (
    <>
      <section className={css.portfolid} id="portfolid">
        <TitleSection title="MY PORTFOLIO." />

        <Category />
      </section>
    </>
  )
}
