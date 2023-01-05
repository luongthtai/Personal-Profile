import React from 'react'
import css from "./Testimonials.module.scss"
import TitleSection from '../../../TitleSection/TitleSection'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import TestimonialItem from './components/TestimonialItem';

export default function Testimonials() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div id={css.testimonials}>
            <TitleSection title="TESTIMONIALS" />

            <Slider {...settings}>
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
                <TestimonialItem />
            </Slider>
        </div>
    )
}
