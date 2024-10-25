import React, {useEffect, useState} from 'react';
import MyImg from '../../assets/WhatsApp Image 2023-12-30 at 12.34.30 AM.jpeg';
import { FaNodeJs,FaReact,FaJs,FaHtml5 } from "react-icons/fa";
import { SiTailwindcss,SiExpress } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { motion } from 'framer-motion'
import { img } from 'framer-motion/client';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width and update isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };
    handleResize(); // Check screen size on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className=' h-full  bg-bodyColor py-8'>
      <div 
      className="container mx-auto w-11/12"
      >
      {/* <div className="flex justify-center mb-4">
      <motion.h2 
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
      </div> */}
      <motion.div className="flex flex-col lg:flex-row items-center space-y-4 sm:space-y-0 lg:space-x-20 rounded-lg shadow-shadowOne py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
        
        <motion.div 
                className="w-full lg:w-1/2 flex justify-center"
                
                // viewport={{ once: true }}
              >
                {isMobile ? (
                  <img src={MyImg} alt="My Image" className='h-96 rounded-md w-80 object-cover' />) : 
                  (
                    <motion.img src={MyImg} alt="My Image" className='h-96 rounded-md w-80 object-cover' initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}/>
                  )
                }
          
          </motion.div>
          {isMobile ? (
        <div className="w-full lg:w-1/2 text-base font-medium space-y-4 text-gray-200 font-k2d">
          <h3 className="text-gray-100 font-outfit text-xl font-medium">
            About <span className="text-designColor italic">Me</span>
          </h3>
          <p>I'm passionate full-stack developer specializing in the MERN stack. I thrive on building dynamic, efficient web applications that deliver seamless user experiences across the front-end and back-end. My expertise includes creating responsive and intuitive user interfaces with React.js and Tailwind CSS, as well as designing robust, scalable back-end systems with Node.js and Express.js.</p>
          <p>I enjoy solving complex problems and have experience in API integration, database management with MongoDB, and implementing best practices in coding, debugging, and performance optimization. I'm always eager to learn new technologies and apply them to create innovative, user-friendly solutions.</p>
          <p>When I'm not in full-on developer mode, I enjoy reading novels or hovering on Twitter and Instagram, which helps keep me balanced and creative. I’m excited to collaborate on projects that push the boundaries of technology and improve the user experience.</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-base font-medium space-y-4 text-gray-200 font-k2d"
        >
          <h3 className="text-gray-100 font-outfit text-xl font-medium">
            About <span className="text-designColor italic">Me</span>
          </h3>
          <p>I'm passionate full-stack developer specializing in the MERN stack. I thrive on building dynamic, efficient web applications that deliver seamless user experiences across the front-end and back-end. My expertise includes creating responsive and intuitive user interfaces with React.js and Tailwind CSS, as well as designing robust, scalable back-end systems with Node.js and Express.js.</p>
          <p>I enjoy solving complex problems and have experience in API integration, database management with MongoDB, and implementing best practices in coding, debugging, and performance optimization. I'm always eager to learn new technologies and apply them to create innovative, user-friendly solutions.</p>
          <p>When I'm not in full-on developer mode, I enjoy reading novels or hovering on Twitter and Instagram, which helps keep me balanced and creative. I’m excited to collaborate on projects that push the boundaries of technology and improve the user experience.</p>
        </motion.div>
      )}
      </motion.div>
      </div>
    </div>
  );
};

export default About;
