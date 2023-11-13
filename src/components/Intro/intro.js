import React from "react";
import './introCSS.css';
import bg from "../../assets/bg.png"
import {Link} from "react-scroll";

const Intro = () => {
    return (
        <section id="Intro">
            <div className="introContent">
                <span className="hello">Hello,</span>

                <span className="introText">I'm

                    <span className="introName"> Jose Luis De La Luz III</span>
                    <br/>
                   Full Stack Web Developer
                    <br/>
                    AWS Cloud Engineer
                    <br/>
                    <p className="introPara">After a dedicated service with the United States Navy, I embarked on an exciting journey to follow my
                        <br/>true passion in technology. I honed my skills through the successful completion of two intensive
                        <br/>coding boot camps, equipping myself with a strong foundation in programming and development.</p>
                </span>
                <Link>
                    <button className="hireMeBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="btnImg bi bi-briefcase" viewBox="0 0 16 16">
                            <path
                                d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                        Hire me
                    </button>
                </Link>

            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;