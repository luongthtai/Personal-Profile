import React from 'react'
import css from "./BlogItem.module.scss"
import Image from 'next/image'
import bgBlog from "../../../public/images/bgBlog.jpg"

export default function BlogItem() {
    return (
        <div id={css.container}>
            <div id={css.image}>
                <Image src={bgBlog} alt="background" />
            </div>
            <div id={css.content}>
                <p>29/FEB/2022 - WEBSITE - 1 COMMENT</p>
                <h3>Five Solid Evidences Attending Design Is Good For Your Career Development.</h3>
            </div>
        </div>
    )
}
