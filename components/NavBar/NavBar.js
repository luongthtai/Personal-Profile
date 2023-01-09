import React, { useEffect, useState } from "react";
import css from "./navBar.module.scss"
import Image from "next/image";
import avatar from "../../public/images/avatar.jpg"
import { AiFillBook, AiFillIdcard, AiFillHome, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { GoSettings } from "react-icons/go"
import { SlNotebook } from "react-icons/sl"
import { FaFacebookF, FaTiktok } from "react-icons/fa"
import Link from "next/link";

export default function NavBar() {
    const [section, setSection] = useState(1)

    const styles = {
        color: "var(--greenColor)",
        fontWeight: "700"
    }

    useEffect(() => {

        window.addEventListener('scroll', () => {
            let scroll = window.scrollY

            if (scroll < 120) setSection(1)
            if (scroll < 2782 && scroll > 120) setSection(2)
            if (scroll < 3982 && scroll > 2782) setSection(3)
            if (scroll < 5000 && scroll > 3982) setSection(4)
            if (scroll < 6200 && scroll > 5000) setSection(5)
            if (scroll > 6200) setSection(6)

            // console.log(scroll)
        });
    }, [])

    return (
        <>
            <div className={css.root}>
                <div id={css.user}>
                    <div id={css.image}>
                        <Image
                            src={avatar}
                            alt='avatar'
                        />
                    </div>

                    <p id={css.nameUser}>Luong The Tai</p>
                </div>

                <nav id={css.navbar}>
                    <Link href="#heroSection" style={section === 1 ? styles : {}} ><AiFillHome />HOME</Link>

                    <Link href="#about" style={section === 2 ? styles : {}} ><AiFillIdcard />ABOUT</Link>

                    <Link href="#services" style={section === 3 ? styles : {}}
                    ><GoSettings />SERVICES</Link>

                    <Link href="#portfolid" style={section === 4 ? styles : {}}
                    ><AiFillBook />PORTFOLID</Link>

                    <Link href="#blog" style={section === 5 ? styles : {}}
                    ><SlNotebook />BLOG</Link>

                    <Link href="#contact" style={section === 6 ? styles : {}}
                    >CONTACT ME</Link>
                </nav>
            </div>

            <div id={css.contact}>
                <a href="#">
                    <FaFacebookF />
                </a>
                <a href="#">
                    <AiOutlineTwitter />
                </a>
                <a href="#">
                    <AiOutlineInstagram />
                </a>
                <a href="#">
                    <FaTiktok />
                </a>
                <a href="#">
                    <AiOutlineYoutube />
                </a>
            </div>
        </>
    );
}
