import React from 'react';
import { Cover } from "@/components/ui/cover";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="text-white py-12 md:py-20 bg-background">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl mx-auto relative z-20 py-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Experience <Cover>Lightning-Fast</Cover> Internet with WaveNet
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
          Reliable, high-speed internet for your home and business.
        </p>
        <div className='flex justify-center items-center mt-8'>
          <Link href="/pricing">
            <button className="flex items-center border-2 border-black text-white px-4 py-2 sm:px-6 sm:py-3 font-bold rounded-xl bg-text text-sm sm:text-base md:text-lg hover:bg-black hover:text-primary transition-colors duration-300 hover:border-accent">
              Explore Now
              <ArrowRight className="ml-2" size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
