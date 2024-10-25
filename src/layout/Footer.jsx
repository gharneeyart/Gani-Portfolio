import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import Logo from '../assets/logo.png';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-bodyColor text-white py-8 ">
      <div className=" px-4 container mx-auto w-11/12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            Ganiyat
            {/* <img src={Logo} alt="Logo" className="h-10" /> */}
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://github.com/gharneeyart" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://x.com/Gharneeyart20?t=aE_FvOJyFgk9ocZTtX10iQ&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
             
              <FaXTwitter className="h-6 w-6"/>
            </a>
            <a href="https://www.linkedin.com/in/shuaib-ganiyat-a49482273" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/gharneeyart20?igsh=MWwzY29ldXkzdTVlaA==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-base">
         
          <p className="mt-2">&copy; {new Date().getFullYear()}.Ganiyat Shuaib</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
