"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const Card = ({ title, price, speed, features = [], className = "" }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`plan flex border-text border-2 flex-col h-2/3 text-black p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-xl ${className}`}
        >
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">{title}</h2>
            <p className="text-2xl font-semibold mb-4 text-center">{price}</p>
            <p className="text-lg mb-6 text-center ">{speed}</p>
            <ul className=" mb-8 text-left flex-grow">
                {features.length > 0 ? (
                    features.map((feature, index) => (
                        <li key={index} className="mb-2">{feature}</li>
                    ))
                ) : (
                    <li className="mb-2">No features available</li>
                )}
            </ul>
            <div className="text-center">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className=" text-white py-3 px-6 border border-secondary rounded-full shadow-md  bg-primary hover:text-text hover:bg-black transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                    <Link href="/signup">
                    Sign Up Now
                    </Link>
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Card;
