import React from 'react'
import Head from 'next/head'
import css from "./Blog.module.scss"

export default function Blog() {
  return (
    <>
      <section id='blog' className={css.blog}>
        this is blog page
      </section>
    </>
  )
}

