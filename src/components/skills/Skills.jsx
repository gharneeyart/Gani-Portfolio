import React, {useContext} from 'react';
import Html from '../../assets/icon/icons8-html-5-48.png';
import Css from '../../assets/icon/icons8-css-48.png';
import Js from '../../assets/icon/icons8-javascript-48.png';
import Bootstrap from '../../assets/icon/icons8-bootstrap-48.png';
import Tailwind from '../../assets/icon/icons8-tailwindcss-48.png';
import Reactjs from '../../assets/icon/icons8-react-native-48.png';
// import Next from '../../assets/icon/icons8-nextjs-48.png';
import { RiNextjsFill } from "react-icons/ri";
import Node from '../../assets/icon/icons8-node-js-48.png';
// import Express from '../../assets/icon/icons8-express-js-48.png';
import { SiExpress } from "react-icons/si";
import Mongodb from '../../assets/icon/icons8-mongodb-48.png';
import Github from '../../assets/icon/icons8-github-48.png';
import Git from '../../assets/icon/icons8-git-48.png';
import { motion } from 'framer-motion'
import { PageTheme } from '../../contexts/ThemeContext';

const Skills = () => {
  const { theme } = useContext(PageTheme)
  return (
    <div className={`bg-${theme}  ${theme === "dark" ? "bg-slate-300" : "bg-bodyColor" } h-auto flex justify-center items-center py-8 `} >
      <motion.div className="flex flex-col justify-center w-11/12 container mx-auto "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
        <div className="flex flex-col justify-center items-center mb-6">
        <h3 className={` ${theme === 'dark' ? 'text-black' : 'text-gray-100'}  font-outfit text-xl font-medium`}>My <span className={`${theme === 'dark' ? 'text-blue-600' : 'text-designColor'} italic`}>Skills</span></h3>
          <p className={`mt-2 text-center font-poppins ${theme === 'dark' ? 'text-black' : 'text-gray-200'}`}>The language, technologies and tools that I am really good at:</p>
        </div>
        <div className={`grid grid-cols-3  md:grid-cols-5 gap-4 justify-center w-full font-k2d ${theme === 'dark' ? 'text-black' : 'text-gray-200'}  font-semibold`}>
          <div className="flex justify-center flex-col items-center">
            <img src={Html} alt="HTML" className='w-12 h-12' />
            <p className=''>Html</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <img src={Css} alt="CSS" className='w-12 h-12' />
            <p className=''>Css</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 hover:scale-110 duration-300">
            <img src={Js} alt="JavaScript" className='w-12 h-12' />
            <p className=''>JavaScript</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 hover:scale-110 duration-300">
            <img src={Bootstrap} alt="Bootstrap" className='w-12 h-12' />
            <p className=''>Bootstrap</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 hover:scale-110 duration-300">
            <img src={Tailwind} alt="Tailwind CSS" className='w-12 h-12' />
            <p>Tailwind CSS</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 hover:scale-110 duration-300">
            <img src={Reactjs} alt="React.js" className='w-12 h-12' />
            <p>React</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 hover:scale-110 duration-300">
            {/* <img src={Next} alt="Next.js" className='w-12 h-12' /> */}
            <RiNextjsFill className={`${theme === 'dark' ? 'text-gray-800' : 'text-gray-200'}`} size={50}/>
            <p>Next</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 hover:scale-110 duration-300">
            <img src={Node} alt="Node.js" className='w-12 h-12' />
            <p>Node.js</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 hover:scale-110 duration-300">
            {/* <img src={Express} alt="Express.js" className='w-12 h-12' /> */}
            <SiExpress className={`${theme === 'dark' ? 'text-gray-800' : 'text-gray-200'}`} size={50}/>
            <p>Express.js</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 hover:scale-110 duration-300">
            <img src={Mongodb} alt="MongoDB" className='w-12 h-12' />
            <p>MongoDB</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 hover:scale-110 duration-300">
            <img src={Git} alt="Git" className='w-12 h-12' />
            <p>Git</p>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 hover:scale-110 duration-300">
            <img src={Github} alt="GitHub" className='w-12 h-12' />
            <p>GitHub</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
