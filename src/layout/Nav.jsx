import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navRef = useRef();
  const handleClick = () => setClick(!click);
  const handleSetActive = (link) => {
    setActiveLink(link);
  };
  const closeNavbar = () => {
    setClick(!click);
  };
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setClick();
    }
  };
  useEffect(() => {
    if (click) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [click]);

  return (
    <nav className=' py-5 fixed top-0 left-0 right-0  z-50 bg-bodyColor'>
      <div className="container mx-auto w-11/12 flex justify-between items-center">
      <div className='font-outfit text-2xl text-gray-100'>
        <a href='#'>Ganiyat</a>
      </div>
      <div className='menu-icon block lg:hidden text-white' onClick={handleClick}>
        {click ? <IoClose size={30}/> : <HiOutlineMenuAlt3 size={30}/>}
      </div>
      <div className={`duration-500 lg:static bg-customLightBlue lg:bg-transparent absolute top-0 left-0 w-full pt-4 pb-8 lg:pt-0 lg:pb-0 ${
          click ? 'block top-[100%] bg-bodyColor' : 'hidden  top-[12%]' 
        } lg:flex lg:items-center lg:w-auto min-h-fit flex-col lg:flex-row`}>
      <ul className='flex flex-col lg:flex-row gap-8 text-base md:text-xl font-poppins font-medium px-6 md:px-8'>
        <li>
          <Link
            to='about'
            className={`hover:text-designColor border-b-primary py-2 ${activeLink === "about" ? "text-designColor" : "text-gray-400"}`}
            onClick={() => { closeNavbar(); handleSetActive("about"); }}>
              About 
            </Link>
            </li>
        <li><Link
            to='skills'
            className={`hover:text-designColor border-b-primary py-2 ${activeLink === "skills" ? "text-designColor" : "text-gray-400"}`}
            onClick={() => { closeNavbar(); handleSetActive("skills"); }}>
              Skills 
            </Link></li>
        <li><Link
            to='portfolio'
            className={`hover:text-designColor border-b-primary py-2 ${activeLink === "portfolio" ? "text-designColor" : "text-gray-400"}`}
            onClick={() => { closeNavbar(); handleSetActive("portfolio"); }}>
              Portfolio
            </Link></li>
        <li><Link
            to='contact'
            className={`hover:text-designColor border-b-primary py-2 ${activeLink === "contact" ? "text-designColor" : "text-gray-400"}`}
            onClick={() => { closeNavbar(); handleSetActive("contact"); }}>
              Contact
            </Link></li>
        <li><a href="">Resume</a></li>
      </ul>
      </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
