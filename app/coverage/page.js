"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Inner from "@/components/layout/Inner";

const Coverage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const areas = [
        "Dhaka",
        "Chittagong",
        "Sylhet",
        "Rajshahi",
        "Khulna",
        "Barisal",
        "Comilla",
    ];

    const filteredAreas = areas.filter((area) =>
        area.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Inner>
            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Coverage Area
                    </motion.h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Wavenet has a vast coverage area, reaching almost every part of Bangladesh. Check the availability of our coverage zones across the country.
                    </p>
                </div>
            </section>

            {/* Searchable Area Section */}
            <section className="container mx-auto py-12 px-4">
                <div className="bg-primary p-10 rounded-xl shadow-md">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Find Coverage in Your Area</h2>
                        <p className="text-lg text-white mt-2">
                            Search for your area in Bangladesh to see if Wavenet is available.
                        </p>
                    </div>
                    <div className="flex justify-center mb-8">
                        <input
                            type="text"
                            placeholder="Enter your area..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="p-4 w-full max-w-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </div>
                </div>
            </section>

            {/* Display Area Section */}
            <section className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAreas.length > 0 ? (
                        filteredAreas.map((area, index) => (
                            <div key={index} className="p-6 bg-secondary text-white rounded-lg shadow-md text-center">
                                {area}
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-600">
                            No areas found. Please try a different search term.
                        </div>
                    )}
                </div>
            </section>
        </Inner>
    );
};

export default Coverage;
