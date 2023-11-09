import React from "react";
import './introCSS.css';
import bg from "../../assets/linkedin_profile_pic_inPixio.png"

const Intro = () => {
    return (
        <section id="Intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm
                    <span className="introName"> Jose Luis De La Luz III</span>
                    <br/>
                    a Navy Veteran with a passion for full stack web development and cloud infrastructure
                </span>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;