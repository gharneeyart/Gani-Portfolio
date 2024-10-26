import React, {useContext} from 'react';
import { FaLink } from "react-icons/fa6";
import Github from '../../assets/icon/icons8-git-48.png'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { FaNodeJs,FaReact,FaJs,FaHtml5 } from "react-icons/fa";
import { SiTailwindcss,SiExpress, SiMongodb } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import Git from '../../assets/icon/icons8-git-48.png';
// import Github from '../assets/icon/icons8-github-48.png';
import MyImg from '../../assets/WhatsApp Image 2023-12-30 at 12.34.30 AM.jpeg';
import P1 from '../../assets/images/landing page.png'
import P2 from '../../assets/images/Landing Page (2).png'
import P3 from '../../assets/images/Properties.png'
import P4 from '../../assets/images/Landing Page (3).png'
import { motion } from 'framer-motion'
import { DiCss3 } from "react-icons/di";
import { PageTheme } from '../../contexts/ThemeContext';

const Works = () => {
  const { theme } = useContext(PageTheme)
  const works = [
    {
      id: 1,
      title: 'FragranceHub',
      image: P1,
      description: 'FragranceHub is an ecommerce fullstack application built using React for the frontend and Node.js for the backend. The application allows users to browse through products, add them to their cart, and proceed to checkout.',
      github: '',
      live: 'https://frangrancehubwebv2.vercel.app/',
      stack: [<FaReact/>, <DiCss3 /> , <BsBootstrap />, <FaNodeJs/>, <SiExpress />, <SiMongodb />]
    },
    {
      id: 2,
      title: 'BIZFIDES',
      image: P2,
      description: 'Bizfides is a website platform designed to help businesses establish and enhance their online presence by providing a range of tools, and services, such as website building, SEO optimization, expert advice, networking opportunities, with the goal of supporting online business growth and success.',
      github: '',
      live: 'https://bizfides--eight.vercel.app/',
      stack: [<FaReact/>, <SiTailwindcss/> , <FaNodeJs/>, <SiExpress />, <SiMongodb />]
    },
    {
      id: 3,
      title: 'BETAHOUSE',
      image: P3,
      description: 'BetaHouse, is a property listing platform designed to help users browse through a curated selection of real estate properties. The platform allows users to search for their ideal home based on location, property type, and the number of bedrooms.',
      github: 'https://github.com/gharneeyart/BetaHouse',
      live: 'https://beta-housegharneeyart-shuaib-ganiyats-projects.vercel.app/',
      stack: [<FaReact/>, <SiTailwindcss/> , <FaNodeJs/>, <SiExpress />, <SiMongodb />]
    },
    {
      id: 4,
      title: 'PORTFOLIO',
      image: P4,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor asperiores provident nulla doloremque a tempore quisquam quo reiciendis eligendi, non, vero mollitia repellat odio quas fugit et pariatur. Quas, quis.',
      github: 'https://github.com/gharneeyart/Portfolio',
      live: 'https://portfolio-gharneeyart.vercel.app/',
      stack: [<FaReact/>, <SiTailwindcss/> ]
    }
  ];

  return (
    <div className={`bg-${theme}  ${theme === "dark" ? "bg-gradient-to-r from-blue-200 to-purple-400" : "bg-bodyColor" } h-full flex flex-col justify-center items-center py-8 `}>
      <div className="container mx-auto w-11/12">
      <div className="flex flex-col justify-center items-center mb-6">
      <h3 className={` ${theme === 'dark' ? 'text-blue-600 ' : 'text-designColor  '} font-outfit text-xl font-medium italic`}>Projects</h3>
        <p className={`mt-2 text-center font-poppins  ${theme === 'dark' ? 'text-black ' : 'text-gray-200  '}`}>Some remarkable projects I’ve worked on:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1  gap-6 xl:gap-14">
      {works.map((work, index) => (
      <motion.div key={work.id}  className={`w-full p-4 xl:px-10 h-auto rounded-lg  flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} flex ${theme === "dark" ? "bg-slate-300" : "bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900" }  transition-colors duration-1000 items-center gap-8 py-8`} initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className={`w-full lg:w-[70rem] h-72 md:h-80 overflow-hidden rounded-xl hover:rounded-none border-b-8  hover:border-0 shadow-blue-600 ${theme === 'dark' ? 'border-blue-600' : 'border-designColor  '}`}>
        <img
          className="w-full  object-cover  cursor-pointer"
          src={work.image}
          alt="src"
        />
      </div>
      <div className='w-[100%]'>
        <div className="w-full  flex flex-col space-y-4 ">
          <div className="flex items-center justify-between">
            <h3 className={`text-base uppercase ${theme === 'dark' ? 'text-black hover:text-gray-800' : 'text-gray-200 hover:text-gray-100 '} font-semibold font-outfit`}>
              {work.title}
            </h3>
            <div className="flex gap-2">
              <a href={work.github} className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </a>
              <a href={work.live} className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className={`text-base tracking-wide mt-3 duration-300 font-k2d ${theme === 'dark' ? 'text-black hover:text-gray-800' : 'text-gray-200 hover:text-gray-100 '}`}>
            {work.description}
          </p>
          <div className="w-full flex">{work?.stack?.map((tech,index) => (
            <span key={index} className={`mr-2 text-2xl border-2 ${theme === 'dark' ? 'text-blue-600 border-blue-600' : ' text-designColor border-designColor'}  cursor-pointer  p-2  rounded-full hover:scale-110 duration-300`}>{tech}</span>
          ))}</div>
        </div>
      </div>
    </motion.div>
    ))}
      </div>
      </div>
      
     
    </div>
  );
}

export default Works;
