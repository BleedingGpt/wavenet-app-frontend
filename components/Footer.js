import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap justify-around">
          {/* Column 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul>
              <li>
                <Link href="/aboutus" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">Pricing</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <ul>
              <li>
                <Link href="/pricing" className="hover:underline">Internet Plans</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Business Solutions</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Support</Link>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-wrap gap-4">
              <Link href="https://facebook.com" className="hover:text-blue-500">Facebook</Link>
              <Link href="https://twitter.com" className="hover:text-blue-400">Twitter</Link>
              <Link href="https://instagram.com" className="hover:text-pink-500">Instagram</Link>
              <Link href="https://linkedin.com" className="hover:text-blue-700">LinkedIn</Link>
            </div>
          </div>
          {/* Column 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">1234 Main Street</p>
            <p className="mb-2">City, State, ZIP</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>
              Email: 
              <Link href="mailto:info@example.com" className="hover:underline">info@example.com</Link>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 mt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} WaveNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
