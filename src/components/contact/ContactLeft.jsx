import React, {useContext} from 'react'
import ProfileImg from "../../assets/file.png";
import {
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { PageTheme } from '../../contexts/ThemeContext';
import MyImg from '../../assets/WhatsApp Image 2023-12-30 at 12.34.30 AM.jpeg';
const ContactLeft = () => {
  const { theme } = useContext(PageTheme)
  return (
    <div className="space-y-3">
    <div className="">
    <img src={MyImg} alt="John Doe" className={`rounded-full w-36 h-36  md:w-40 md:h-40 object-cover shadow-2xl border-4 ${theme === 'dark' ? 'border-gray-900' : 'border-blue-400'} `} />
    </div>
    <h3 className={` ${theme === 'dark' ? 'text-black' : 'text-gray-100'} font-outfit text-xl font-medium`}>
            Contact <span className={`italic ${theme === 'dark' ? 'text-blue-600' : 'text-blue-400'}`}>Me</span>
          </h3>
    <h2 className={`text-2xl text-transparent bg-clip-text bg-gradient-to-r ${theme === 'dark' ? 'from-blue-500 to-purple-700' : ' from-blue-400 to-purple-600'}  from-blue-400 to-purple-600 tracking-wide font-semibold`}>
    Enjoyed my work? Let’s work together
    </h2>
    <p className={`font-k2d ${theme === 'dark' ? 'text-black' : 'text-gray-200 '}`}>I’m always up for a chat. Pop me an email at <span className={`${theme === 'dark' ? 'text-blue-600' : 'text-blue-400'}`}>shuaibganiyat20@gmail.com</span> or give me a shout on social media. </p>
    <div className="flex gap-4">
  
  <a href="https://www.facebook.com/shuaib.ganiyat.1?mibextid=ZbWKwL" target="blank">
    <span className={`bannerIcon ${theme === 'dark' ? 'bg-opacity-100 shadow-none hover:bg-opacity-100' : 'bannerIcon'}`}>
      <FaFacebookF />
    </span>
  </a>
  <a href="https://x.com/Gharneeyart20?t=aE_FvOJyFgk9ocZTtX10iQ&s=09" target="blank">
    <span className={`bannerIcon ${theme === 'dark' ? 'bg-opacity-100 shadow-none hover:bg-opacity-100' : 'bannerIcon'}`}>
    <FaXTwitter />
    </span>
  </a>
  <a href="https://www.linkedin.com/in/shuaib-ganiyat-a49482273" target="blank">
    <span className={`bannerIcon ${theme === 'dark' ? 'bg-opacity-100 shadow-none hover:bg-opacity-100' : 'bannerIcon'}`}>
      <FaLinkedinIn />
    </span>
  </a>
  <a href="https://www.instagram.com/gharneeyart20?igsh=MWwzY29ldXkzdTVlaA==" target="blank">
    <span className={`bannerIcon ${theme === 'dark' ? 'bg-opacity-100 shadow-none hover:bg-opacity-100' : 'bannerIcon'}`}>
      <FaInstagram />
    </span>
  </a>
</div>
  </div>
  )
}

export default ContactLeft