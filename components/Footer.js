import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4 group cursor-pointer">
               <div className='relative w-8 h-8 transition-transform duration-300 group-hover:rotate-12'>
                  <img width="32" height="32" src="https://img.icons8.com/arcade/64/link.png" alt="link"/>
               </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-dancing-script), cursive' }}>ShortLink</span>
            </Link>
            <p className="text-purple-200 text-sm">
              Simplifying the web, one link at a time. Secure, fast, and reliable URL shortening for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-purple-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-purple-300 hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link href="/About" className="text-purple-300 hover:text-white transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link href="/Shortener" className="text-purple-300 hover:text-white transition-colors duration-200">Shortener</Link>
              </li>
              <li>
                <Link href="/Contact" className="text-purple-300 hover:text-white transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-4 text-purple-100">Connect With Us</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-shrink-0">
                  <Image src="/G-Mail.png" alt="Email" width={20} height={20} />
              </div>
              <p className="text-purple-300 text-sm">support@shortlink.com</p>
            </div>
            <div className="flex space-x-4 mt-2">
              {/* <Link href="#" className="w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 overflow-hidden">
                <Image src="/social.png" alt="Social" width={20} height={20} />
              </Link> */}
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ShortLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
