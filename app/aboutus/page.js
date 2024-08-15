"use client"
import React from 'react';
import Inner from '@/components/layout/Inner';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
const AboutUs = () => {
  return (
    <Inner>
      <section className="relative bg-background w-full h-80 sm:h-96 md:h-[270px] lg:h-[300px]">
        <div className="absolute inset-0">
          <img
            src="/images/about.png"
            alt="About Us Background"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-background opacity-20"></div>
        <div className="relative z-20 flex items-center justify-center h-full">
          <h1 className="text-white  text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            About Us
          </h1>
        </div>
      </section>
      <section className="mx-6 my-14 bg-secondary py-10 rounded-lg flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-4 lg:w-1/2 px-6">
          <h2 className="text-primary text-xl lg:text-2xl font-bold">About Us</h2>
          <p className="text-white font-bold text-lg lg:text-xl">
            "Empowering Connectivity with Cutting-Edge Technology"
          </p>
          <p className="text-white text-sm lg:text-base">
            At Wavenet, we believe in more than just delivering data. We believe in enhancing lives and enabling success through seamless digital experiences.
          </p>
          <p className="text-white text-sm lg:text-base">
            Our dedication goes beyond technology. We are passionate about customer satisfaction, providing 24/7 support, and customizing solutions to meet your unique needs. As we look to the future, we remain committed to evolving with the digital landscape, ensuring you always have the best in internet services.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 lg:w-1/2 px-6">
          <img
            src="/images/about2.jpg"
            alt="About Us Background"
            className="object-contain w-full h-auto rounded-lg"
          />
        </div>
      </section>
      <section className="mx-6 my-14 bg-gray-900 py-10 rounded-lg flex flex-col lg:flex-row justify-between items-center">
        <div className="mt-6 lg:mt-0 lg:w-1/2 px-6">
          <img
            src="/images/vision.jpg"
            alt="Our Vision Background"
            className="object-cover w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 px-6">
          <h2 className="text-white text-xl lg:text-2xl my-4 font-bold">Our Vision</h2>
          <p className="text-white font-bold text-lg lg:text-xl">
            "Connecting Communities with Unmatched Excellence"
          </p>
          <p className="text-white text-sm lg:text-base">
            At Wavenet, our vision is to transform the way people connect, communicate, and thrive in a digital world. We are dedicated to bridging the digital divide and providing unparalleled internet experiences that empower both individuals and businesses.
          </p>
          <p className="text-white text-sm lg:text-base">
            We strive to lead the industry with innovative solutions, ensuring that our technology not only meets the needs of today but anticipates the demands of tomorrow. By fostering a culture of continuous improvement and customer-centricity, we aim to be the trusted partner for all your connectivity needs.
          </p>
        </div>
      </section>
      <section className="py-12 my-5 px-16  ">
        <div className="text-center bg-secondary pt-5 rounded-3xl">
          <h2 className="font-bold py-5 text-white text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-10">
            Want to know more?
          </h2>
          <div className="flex justify-center items-center">
            <Link href="/contact">
              <button className="mt-2 mb-5 flex items-center border-2 border-black text-white px-6 py-3 font-bold rounded-xl bg-primary text-sm md:text-base lg:text-lg hover:bg-black hover:text-primary transition-colors duration-300 hover:border-accent">
                Reach out
                <ArrowRight className="ml-2" size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Inner>
  );
};

export default AboutUs;
