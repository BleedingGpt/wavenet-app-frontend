"use client";
import Inner from '@/components/layout/Inner';
import React from 'react';
import { motion } from 'framer-motion';

const Offers = () => {
    return (
        <Inner>
            <section className="relative w-full py-20 text-white">
                <div className="container mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold"
                    >
                        Our Offers
                        <p className="text-lg md:text-xl lg:text-lg  mt-4">
                            Exclusive Offers with Wavenet
                        </p>
                    </motion.h1>
                </div>
            </section>
            <section className="w-full py-10">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src="/images/offers-detail.jpg"
                            alt="Special Offers"
                            className="object-contain w-full h-auto max-w-4xl rounded-lg"
                        />
                    </div>
                </div>
            </section>
        </Inner>
    );
}

export default Offers;
