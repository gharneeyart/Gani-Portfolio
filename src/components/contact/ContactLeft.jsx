import React from 'react'
import ProfileImg from "../../assets/file.png";
import {
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const ContactLeft = () => {
  return (
    <div className="space-y-3">
    <div className="">
    <img src={ProfileImg} alt="John Doe" className="rounded-full w-36 h-36  md:w-40 md:h-40 object-cover shadow-2xl border-4 border-blue-400" />
    </div>
    <h5 className="text-xl italic text-white tracking-wide font-k2d">
      Contact Me
    </h5>
    <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-wide font-semibold">
    Enjoyed my work? Let’s work together
    </h2>
    <p className='text-gray-200'>I’m always up for a chat. Pop me an email at <span className='text-blue-400'>shuaibganiyat20@gmail.com</span> or give me a shout on social media. </p>
    <div className="flex gap-4">
  
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
  )
}

export default ContactLeft