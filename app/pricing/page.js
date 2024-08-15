"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Inner from '@/components/layout/Inner';
import Card from '@/components/Card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
// Define the plans data
const plans = [
  {
    title: "Basic",
    price: "$29.99/month",
    speed: "50 Mbps",
    dataCap: "Unlimited",
    features: ["Free Installation", "24/7 Customer Support", "Free Modem", "______", "______"],
    className: "bg-white",
  },
  {
    title: "Standard",
    price: "$49.99/month",
    speed: "100 Mbps",
    dataCap: "Unlimited",
    features: [
      "Free Installation",
      "24/7 Customer Support",
      "Free Modem",
      "Streaming Service",
      "______",
    ],
    className: "bg-secondary text-white",
  },
  {
    title: "Premium",
    price: "$69.99/month",
    speed: "200 Mbps",
    dataCap: "Unlimited",
    features: [
      "Free Installation",
      "24/7 Customer Support",
      "Free Modem",
      "Streaming Service",
      "Security Package",
    ],
    className: "bg-white",
  },
];

const features = ["Price", "Speed", "Data Cap", "Additional Features"];

const ComparisonTable = ({ plans }) => {
  return (
    <section className="comparison-table mt-12">
      <h2 className="text-3xl font-bold text-center mb-6">Compare Our Plans</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-black border-collapse bg-text">
          <thead>
            <tr>
              <th className="border-2 border-black px-4 py-2">Feature</th>
              {plans.map((plan) => (
                <th key={plan.title} className="border-2 border-black px-4 py-2">{plan.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index}>
                <td className="border-2 border-black px-4 py-2">{feature}</td>
                {plans.map((plan) => (
                  <td key={plan.title} className="border-black border-2 px-4 py-2">
                    {feature === "Price" && plan.price}
                    {feature === "Speed" && plan.speed}
                    {feature === "Data Cap" && plan.dataCap}
                    {feature === "Additional Features" && plan.features.join(", ")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <Inner>
      <div className="py-20 text-white bg-background dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold"
            >
              Our Pricing Plans
              <p className="text-lg font-semibold">
                Choose the best plan that suits your needs
              </p>
            </motion.h1>
          </div>

          <section className="plans flex flex-wrap justify-center gap-8 my-20">
            {plans.map((plan, index) => (
              <Card
                key={index}
                title={plan.title}
                price={plan.price}
                speed={plan.speed}
                features={plan.features}
                className={plan.className}
              />
            ))}
          </section>
          <ComparisonTable plans={plans} />
          <section className="py-12 px-6 ">
            <div className="text-center">
              <h2 className="font-bold py-10 text-white text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-10">
                Check out our offers
              </h2>
              <div className="flex justify-center items-center">
                <Link href="/offers">
                  <button className="mt-4 flex items-center border-2 border-black text-white px-6 py-3 font-bold rounded-xl bg-primary text-sm md:text-base lg:text-lg hover:bg-black hover:text-primary transition-colors duration-300 hover:border-accent">
                    Explore Now
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Inner>
  );
};

export default Pricing;
