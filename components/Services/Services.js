import React from 'react'
import css from "./Services.module.scss"
import WhatIDo from './components/WhatIDo/WhatIDo'
import Testimonials from './components/Testimonials/Testimonials'

export default function Services() {
  return (
    <>
      <section id='services' className={css.services}>
        <WhatIDo />
        <Testimonials />
      </section>
    </>
  )
}
