'use client'

import Hero from "@/components/Hero";
import Home2 from "@/components/Home2";
import Home3 from "@/components/Home3";
import { Home4 } from "@/components/Home4";
import Inner from "@/components/layout/Inner";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <Inner >
      <div className="bg-background text-white ">
        <section className="py-5">
          <Hero />
        </section>
        <section>
          <Home2 />
        </section>
        <Home4 />
        <section>
          <Home3 />
        </section>
        <section>
          <div className="my-20 flex justify-center items-center">
          <Link href="/pricing">
                <button className="mt-2 flex items-center border-2 border-black text-white px-10 py-4 font-bold rounded-xl bg-text text-sm hover:bg-black hover:text-primary transition-colors duration-300 hover:border-accent">
                  Explore Our Packages
                  <ArrowRight className="ml-2" size={24} />
                </button>
              </Link>
          </div>
        </section>
      </div>
    </Inner>
  );
}
