// components/Navbar.js
'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" text-white p-4 bg-background py-4">
      <nav className="container mx-auto flex items-center justify-around">
        <div className="text-2xl font-bold text-primary  items-center justify-center logo">
        <Link href="/">Wavenet</Link>
        </div>
        <ul className="hidden md:flex space-x-4 text-md">
          <li className='hover:text-slate-400'><Link href="/">Home</Link></li>
          <li className='hover:text-slate-400'><Link href="/aboutus">AboutUs</Link></li>
          <li className='hover:text-slate-400'><Link href="/pricing">Pricing</Link></li>
          <li className='hover:text-slate-400'><Link href="/offers">Offers</Link></li>
          <li className='hover:text-slate-400'><Link href="/contact">Contact</Link></li>
          <li className='hover:text-slate-400'><Link href="/coverage">Coverage</Link></li>
        </ul>
        <div className="md:hidden">
          <button id="menu-button" aria-label="Open Menu" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className={`md:hidden  text-white justify-center items-center p-4 space-y-2 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul>
          <li className='hover:text-slate-400'><Link href="/">Home</Link></li>
          <li className='hover:text-slate-400'><Link href="/aboutus">AboutUs</Link></li>
          <li className='hover:text-slate-400'><Link href="/pricing">Pricing</Link></li>
          <li className='hover:text-slate-400'><Link href="/offers">Offers</Link></li>
          <li className='hover:text-slate-400'><Link href="/contact">Contact</Link></li>
          <li className='hover:text-slate-400'><Link href="/coverage">Coverage</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
