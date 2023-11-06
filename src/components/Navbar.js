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
            <button className="desktopMenuBTN">
                {/*create image for contact me*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-square-dots-fill desktopMenuImg" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
                Contact me
            </button>
        </nav>
    )
};
export default Navbar;