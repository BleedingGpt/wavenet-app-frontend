"use client"
import Swal from 'sweetalert2';
import React from 'react';
import Inner from '@/components/layout/Inner';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const Form = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f56e9407-5fb0-445f-886a-e2903f98c346");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }

  return (
    <div className='text-white bg-secondary font-bold flex justify-center items-center flex-col p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14 rounded-3xl'>
      <div id='Header' className='text-2xl sm:text-3xl font-bold flex flex-col justify-center my-3 text-center'>
        <div>
        Let's Talk about Your Business
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md sm:max-w-lg">
        <label className="block text-left mb-1">Name:</label>
        <div>
          <input
            className='p-2 my-2 rounded-lg w-full text-black'
            type="text" name="name" id="Name" placeholder='Enter your name' required />
        </div>
        <label className="block text-left mb-1">Email:</label>
        <div >
          <input
            className='p-2 my-2 rounded-lg w-full text-black'
            type="email" name="email" placeholder='Enter your email' id="Email" required />
        </div>
        <label className="block text-left mb-1">Message:</label>
        <div className='w-full'>
          <textarea
            name="message" id="Message" className='w-full h-24 sm:h-32 p-2 rounded-xl my-2 text-black'  placeholder='Enter your message' required>
          </textarea>
        </div>
        <div className='items-center w-full flex justify-center'>
          <button id="SubBtn" className="mt-4 flex items-center border-2 bg-darknav-blue
                border-black text-white px-8 sm:px-10 py-2 rounded-xl text-sm sm:text-base bg-primary hover:bg-black hover:text-primary transition-colors duration-300 hover:border-accent " type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

const Contact = () => {
  return (
    <Inner>
      <div>
        <section className="text-white py-10 sm:py-20">
          <div className="text-center mb-6">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Contact Us
              <p className="text-base sm:text-lg font-semibold mt-2">
                We'd love to hear from you! Reach out to us for any queries or support.
              </p>
            </motion.h1>
          </div>
        </section>
        <section className="py-10 sm:py-20 px-4 sm:px-10 md:px-20">
          <div className="container mx-auto flex flex-col md:flex-row justify-between bg-primary rounded-3xl p-6 md:p-10 lg:p-12">
            <div id="Cont2" className="flex flex-col justify-center gap-6 sm:gap-10 text-white items-center md:items-start p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4">
                Let's get in touch!
              </div>
              <div className="flex flex-row items-center bg-secondary p-4 rounded-lg mb-4 sm:mb-0 w-full sm:w-auto">
                <div className="text-white p-2 rounded-full border border-white">
                  <Phone size={24}/>
                </div>
                <div className="flex flex-col ml-4">
                  <div className="text-sm sm:text-base font-semibold">Call Us</div>
                  <div className="text-lg sm:text-xl">+64567-788-429</div>
                </div>
              </div>
              <div className="flex flex-row items-center bg-secondary p-4 rounded-lg w-full sm:w-auto">
                <div className="text-white p-2 rounded-full border border-white">
                  <Mail size={24}/>
                </div>
                <div className="flex flex-col ml-4">
                  <div className="text-sm sm:text-base font-semibold">Email</div>
                  <div className="lg:text-xl text-sm">wavenetexample@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 w-full md:w-auto">
              <Form />
            </div>
          </div>
        </section>
      </div>
    </Inner>
  );
}

export default Contact;
