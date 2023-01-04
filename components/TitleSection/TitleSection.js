import React from 'react'
import css from "./TitleSection.module.scss"

export default function TitleSection({title}) {
  return (
    <h2 id={css.title}>{title}</h2>
  )
}
