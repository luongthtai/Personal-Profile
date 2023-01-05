import React from 'react'
import Head from 'next/head'
import css from "./Blog.module.scss"
import TitleSection from '../TitleSection/TitleSection'
import BlogItem from './components/BlogItem'
import PrimaryButton from '../button/PrimaryButton'

export default function Blog() {
  return (
    <>
      <section id='blog' className={css.blog}>
        <TitleSection title="LATEST BLOG" />

        <div id={css.contents}>
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>

        <div id={css.button}>
          <PrimaryButton text="More Blogs" />
        </div>
      </section>
    </>
  )
}

