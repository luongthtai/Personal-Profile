import React from 'react'
import css from "./Contact.module.scss"
import TitleSection from '../TitleSection/TitleSection'
import { BiMapAlt } from "react-icons/bi"
import { AiOutlineMail } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import PrimaryButton from '../button/PrimaryButton'

export default function Contact() {
  return (
    <>
      <section id='contact' className={css.contact}>
        <TitleSection title="GET IN TOUCH" />

        <div id={css.root}>
          <div id={css.address}>
            <h3>What`s your story? <br /> Get in touch</h3>

            <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>

            <div id={css.items}>
              <div id={css.home}>
                <BiMapAlt />
                <h4>Hung Nguyen, tinh Nghe An</h4>
              </div>

              <div id={css.email}>
                <AiOutlineMail />
                <h4>luongthetai2705@gmail.com</h4>
              </div>

              <div id={css.phone}>
                <BsPhone />
                <h4>0834538680</h4>
              </div>
            </div>
          </div>

          <form>
            <h3>Say Something</h3>

            <div id={css.accout}>
              <input type="text" placeholder='Name *' />
              <input type="email" placeholder='Email *' />
            </div>

            <input type="text" placeholder='Subject *' />
            <textarea placeholder='Your message *' />

            <PrimaryButton text="Send message" />
          </form>

        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.03190406557!2d105.62820731538072!3d18.662564269685866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139cf0643c17033%3A0xc38fdc32ec5da493!2zQ-G6p3UgTcawbmcsIEjGsG5nIE5ndXnDqm4sIE5naOG7hyBBbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1672894851411!5m2!1svi!2s" width="100%" height="350" style={{border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  )
}
