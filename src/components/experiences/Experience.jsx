import React from 'react';
import { CgCalendarDates } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import Building from "../../assets/icon/mdi_office-building.png";

const Experience = () => {
  return (
    <div className='w-full border py-8 bg-gray-100'>
      <div className="flex justify-center mb-6">
        <h1 className='bg-gray-200 rounded-full px-4 py-2 text-2xl font-bold'>Work Experience</h1>
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto border bg-white p-6 rounded-lg shadow-lg space-y-6">
        <div className="border-b pb-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-2">
            <h1 className="text-xl font-semibold mb-2 md:mb-0">Junior Web Developer</h1>
            <span className='bg-green-300 rounded-full px-4 py-1 text-sm font-medium'>Full Time</span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-700">
            <div className="flex items-center mb-2 md:mb-0">
              <img src={Building} alt="Building" className="w-5 h-5 mr-2" />
              <span>Tech Studio Academy</span>
            </div>
            <div className="flex items-center">
              <GrLocation className="mr-2" />
              <span>Lagos</span>
            </div>
            <div className="flex items-center mt-2 md:mt-0">
              <CgCalendarDates className="mr-2" />
              <span>Jan 2024 - May 2024</span>
            </div>
          </div>
        </div>
        <div className="border-b pb-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-2">
            <h1 className="text-xl font-semibold mb-2 md:mb-0">Web Development Intern</h1>
            <span className='bg-green-300 rounded-full px-4 py-1 text-sm font-medium'>Internship</span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-700">
            <div className="flex items-center mb-2 md:mb-0">
              <img src={Building} alt="Building" className="w-5 h-5 mr-2" />
              <span>Tech Studio Academy</span>
            </div>
            <div className="flex items-center">
              <GrLocation className="mr-2" />
              <span>Lagos</span>
            </div>
            <div className="flex items-center mt-2 md:mt-0">
              <CgCalendarDates className="mr-2" />
              <span>June 2024 - July 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
