import React from "react";
import '../css/navbarCSS.css';
import initials from '../assets/Jd..png';
import { Link } from 'react-scroll';


const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={initials} alt="logo" className='initials'/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About Me</Link>
                <Link className="desktopMenuListItem">Projects</Link>
                <Link className="desktopMenuListItem">Skills and Technology</Link>
                <Link className="desktopMenuListItem">Certifications and Courses</Link>
                <Link className="desktopMenuListItem">Contact Information</Link>
            </div>
            <button className="destopMenuBTN">
                {/*create image for contact me*/}
                <img src="" alt="" className="desktopMenuImg"/>
                Contact me
            </button>
        </nav>
    )
};
export default Navbar;