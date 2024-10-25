// import React, { useState, useRef, useEffect } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [click, setClick] = useState(false);
//   const [activeLink, setActiveLink] = useState("home");
//   const navRef = useRef();
//   const handleClick = () => setClick(!click);
//   const handleSetActive = (link) => {
//     setActiveLink(link);
//   };
//   const closeNavbar = () => {
//     setClick(!click);
//   };
//   const handleClickOutside = (event) => {
//     if (navRef.current && !navRef.current.contains(event.target)) {
//       setClick();
//     }
//   };
//   useEffect(() => {
//     if (click) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [click]);

//   return (
//     <nav className=' py-5 fixed top-0 left-0 right-0  z-50 bg-bodyColor'>
//       <div className="container mx-auto w-11/12 flex justify-between items-center">
//       <div className='font-outfit text-2xl text-gray-100'>
//         <a href='#'>Ganiyat</a>
//       </div>
//       <div className='menu-icon block lg:hidden text-white' onClick={handleClick}>
//         {click ? <IoClose size={30}/> : <HiOutlineMenuAlt3 size={30}/>}
//       </div>
//       <div className={`duration-500 lg:static bg-customLightBlue lg:bg-transparent absolute top-0 left-0 w-full pt-4 pb-8 lg:pt-0 lg:pb-0 ${
//           click ? 'block top-[100%] bg-bodyColor' : 'hidden  top-[12%]' 
//         } lg:flex lg:items-center lg:w-auto min-h-fit flex-col lg:flex-row`}>
//       <ul className='flex flex-col lg:flex-row gap-8 text-base md:text-xl font-poppins font-medium px-6 md:px-8'>
//         <li>
//           <Link
//             to='about'
//             className={`hover:text-designColor border-b-primary py-2 ${activeLink === "about" ? "text-designColor" : "text-gray-400"}`}
//             onClick={() => { closeNavbar(); handleSetActive("about"); }}>
//               About 
//             </Link>
//             </li>
//         <li><Link
//             to='skills'
//             className={`hover:text-designColor border-b-primary py-2 ${activeLink === "skills" ? "text-designColor" : "text-gray-400"}`}
//             onClick={() => { closeNavbar(); handleSetActive("skills"); }}>
//               Skills 
//             </Link></li>
//         <li><Link
//             to='portfolio'
//             className={`hover:text-designColor border-b-primary py-2 ${activeLink === "portfolio" ? "text-designColor" : "text-gray-400"}`}
//             onClick={() => { closeNavbar(); handleSetActive("portfolio"); }}>
//               Portfolio
//             </Link></li>
//         <li><Link
//             to='contact'
//             className={`hover:text-designColor border-b-primary py-2 ${activeLink === "contact" ? "text-designColor" : "text-gray-400"}`}
//             onClick={() => { closeNavbar(); handleSetActive("contact"); }}>
//               Contact
//             </Link></li>
//         <li><a href="">Resume</a></li>
//       </ul>
//       </div>
      
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useRef, useEffect, useContext } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, Events } from 'react-scroll'
import { PiReadCvLogo } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import resume from '../../public/My Resume (2).pdf'
import {PageTheme} from '../../src/contexts/ThemeContext'
const Navbar = () => {
  const [click, setClick] = useState(false)
  const [activeLink, setActiveLink] = useState("home")
  const navRef = useRef(null)
  const { theme, toggleTheme } = useContext(PageTheme);

  const handleClick = () => setClick(!click)

  const handleSetActive = (to) => {
    setActiveLink(to)
  }

  const closeNavbar = () => {
    setClick(false)
  }

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setClick(false)
    }
  }

  useEffect(() => {
    if (click) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    // Set up react-scroll events
    Events.scrollEvent.register('begin', () => {})
    Events.scrollEvent.register('end', () => {})

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [click])

  const navItems = ['about', 'skills', 'portfolio', 'contact']

  return (
    <nav className="py-5 fixed top-0 left-0 right-0 z-50 bg-bodyColor" ref={navRef}>
      <div className="container mx-auto w-11/12 flex justify-between items-center">
        <div className="font-outfit text-2xl text-primary-foreground">
          <Link to='home' className="font-outfit text-2xl text-gray-100">Ganiyat <span className='text-designColor'>Shuaib</span></Link>
        </div>
        <button 
          className="block lg:hidden menu-icon text-white" 
          onClick={handleClick}
          aria-label={click ? "Close menu" : "Open menu"}
        >
          {click ? <IoClose size={30}/> : <HiOutlineMenuAlt3 size={30}/>}
        </button>
        <div
          className={`duration-500 lg:static bg-customLightBlue lg:bg-transparent absolute top-0 left-0 w-full pt-4 pb-8 lg:pt-0 lg:pb-0 ${
             click ? 'block top-[100%] bg-bodyColor' : 'hidden  top-[12%]' 
             } lg:flex lg:items-center lg:w-auto min-h-fit flex-col lg:flex-row`}
        >
          <ul className="flex flex-col lg:flex-row gap-8 text-base md:text-xl font-poppins font-medium px-6 md:px-8">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`hover:text-accent border-b-primary py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent ${
                    activeLink === item ? "text-designColor" : "text-gray-200"
                  }`}
                  onClick={() => {
                    closeNavbar()
                    handleSetActive(item)
                  }}
                  onSetActive={handleSetActive}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
            <li>
            <a href={resume} download="My_Resume.pdf">
      <button className=" w-36 border-2 rounded-lg border-designColor text-gray-200 font-medium flex items-center justify-center">
        <PiReadCvLogo className="mr-2" /> Resume
      </button>
    </a>
            </li>
            <div className="text-white" onClick={toggleTheme}>
            {theme === "dark" ? (
                <IoSunny className=''/>
              ) : (
                <FaRegMoon className=''/>
              )}
              
              
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar