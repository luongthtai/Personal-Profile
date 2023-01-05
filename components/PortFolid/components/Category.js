import React, { useEffect, useState } from 'react'
import css from "./Category.module.scss"

export default function Category() {
    const [data, setData] = useState([])

    useEffect(() => {
        
    }, [])

    return (
        <div id={css.root}>
            <ul id={css.category}>
                <li>ALL</li>
                <li>BRANDING</li>
                <li>PHOTOSHOP</li>
                <li>FASHION</li>
                <li>PRODUCT</li>
            </ul>

            <div id={css.listCategory}>

            </div>
        </div>
    )
}
