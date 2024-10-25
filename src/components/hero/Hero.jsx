import React from 'react';
import { motion } from 'framer-motion'
// import "../css/Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GrLocation } from "react-icons/gr";
import {FaFacebookF,FaLinkedinIn,FaGithub} from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import ProfileImg from "../../assets/file.png";
import { PiReadCvLogo } from "react-icons/pi";
import resume from '../../../public/My Resume (2).pdf'
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Frontend Developer.", "Backend Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className='h-auto  pt-24 pb-8 bg-bodyColor'>
       <div className="container mx-auto w-11/12 flex flex-col-reverse lg:flex-row items-center">
       <motion.div 
                className="w-full lg:w-2/3  flex flex-col  justify-center items-stretch space-y-6 md:space-y-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
        <div>
          <h1 className='text-3xl md:text-5xl font-bold text-white'>Hi, I'm Ganiyat 👋</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#8A42DB"
          />
        </h2>
          <p className='text-base md:text-lg  mt-2 md:mt-4 text-gray-200'>A creative Full Stack Developer with a flair for building sleek, interactive websites. I work with the MERN stack to bring ideas to life—from crafting smooth, responsive designs to building robust back-end systems. I’m all about blending creativity with code to deliver seamless digital experiences. Let’s create something amazing together!</p>
        </div>
        <div className="space-y-2 md:space-y-0 flex flex-col md:flex-row md:gap-8">
          <div className="flex items-center text-white"><span><GrLocation size={25} className='mr-2 text-designColor' /></span> <span>Lagos, Nigeria</span></div>
          <div className="flex items-center text-white"><span className='border w-3 h-3 bg-emerald-400 rounded-full mr-2'></span> Available for new projects</div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 ">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 text-gray-200">
            Find me in
          </h2>
          <div className="flex gap-2 md:gap-4">
            <a href="https://github.com/gharneeyart" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.facebook.com/shuaib.ganiyat.1?mibextid=ZbWKwL" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://x.com/Gharneeyart20?t=aE_FvOJyFgk9ocZTtX10iQ&s=09" target="blank">
              <span className="bannerIcon">
              <FaXTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/shuaib-ganiyat-a49482273" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.instagram.com/gharneeyart20?igsh=MWwzY29ldXkzdTVlaA==" target="blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
          </div>
        </div>
        <a href={resume} download="My_Resume.pdf">
      <button className="bannerIcon w-44 mt-3 md:mt-10 font-semibold flex items-center justify-center">
        <PiReadCvLogo className="mr-2" /> My Resume
      </button>
    </a>
        </div>
        </motion.div>
      {/* <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0 relative">
      <img
        className="w-[300px] h-[400px] lg:w-[500px] lg:h-[680px] z-10"
        src={ProfileImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lg:w-[550px] lg:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div> */}
    <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
               <motion.img
      src={ProfileImg}
      alt="John Doe"
      className="rounded-full w-64 h-64 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border-4 border-blue-400"
      initial={{ borderWidth: "4px" }}
      animate={{ borderWidth: "8px" }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1.5,
      }}
    />
              </motion.div>
      {/* <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
        <img src={ProfileImg} alt="Profile" className='h-60 md:h-full rounded-lg object-cover'/>
      </div> */}
       </div>
    </div>
  );
}

export default Hero;
