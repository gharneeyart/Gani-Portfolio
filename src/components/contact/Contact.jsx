import React, { useState } from 'react';
import ContacImg from '../../assets/man standing on chats 1.svg';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  // Email validation
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    let errorMessages = {};

    // Validation
    if (username === "") {
      errorMessages.username = "Username is required!";
    }
    // if (phoneNumber === "") {
    //   errorMessages.phoneNumber = "Phone number is required!";
    // }
    if (email === "") {
      errorMessages.email = "Please give your Email!";
    } else if (!emailValidation(email)) {
      errorMessages.email = "Give a valid Email!";
    }
    // if (subject === "") {
    //   errorMessages.subject = "Please give your Subject!";
    // }
    if (message === "") {
      errorMessages.message = "Message is required!";
    }

    // If there are error messages, set them; otherwise, proceed
    if (Object.keys(errorMessages).length > 0) {
      setErrors(errorMessages);
    } else {
      setSuccessMsg(
        `Thank you, ${username}. Your message has been sent successfully!`
      );
      setErrors({});
      setUsername("");
      // setPhoneNumber("");
      setEmail("");
      // setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className=" py-20 border-b-[1px] border-b-black bg-bodyColor">
     <div className="container mx-auto w-11/12">
     <div className="flex justify-center items-center text-center">
        {/* <Title title="CONTACT" des="Contact With Me" /> */}
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
          <div className="w-full h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col lg:flex-row gap-8 p-4 lg:p-8 rounded-lg shadow-shadowOne items-center">
            <ContactLeft />
            <form className="w-full lg:w-[70%] flex flex-col gap-4 lg:gap-6 py-2 lg:py-5">
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`contactInput ${errors.username && "outline-designColor"}`}
                    type="text"
                  />
                  {errors.username && (
                    <p className="text-orange-500 text-sm">{errors.username}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`contactInput ${errors.email && "outline-designColor"}`}
                  type="email"
                />
                {errors.email && (
                  <p className="text-orange-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`contactTextArea ${errors.message && "outline-designColor"}`}
                  cols="30"
                  rows="8"
                ></textarea>
                {errors.message && (
                  <p className="text-orange-500 text-sm">{errors.message}</p>
                )}
              </div>

              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
                {successMsg && (
                <p className="py-3 text-designColor text-base tracking-wide animate-bounce text-center">
                  {successMsg}
                </p>
              )}
              </div>
            </form>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Contact;
