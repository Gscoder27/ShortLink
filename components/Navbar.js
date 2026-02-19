'use client';
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const github = 'https://github.com/Gscoder27/ShortLink';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className='bg-purple-700 text-white font-bold relative z-50'
      style={{ 
        fontFamily: 'var(--font-nunito), sans-serif',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
                <Link href="/" className='logo font-bold text-xl flex items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-105'>
                    <div className='relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110'>
                      <img className="w-full h-full object-contain" src="https://img.icons8.com/arcade/64/link.png" alt="link"/>
                    </div>
                    <span 
                        className='text-white font-extrabold text-xl md:text-2xl transition-all duration-300 group-hover:text-purple-100 group-hover:scale-105' 
                        style={{ 
                            fontFamily: 'var(--font-dancing-script), cursive',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.3)',
                            letterSpacing: '0.5px'
                        }}
                    >
                      Shortlink
                    </span>
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
                <ul className='flex items-center gap-6 text-lg font-semibold'>
                    <Link href="/"><li className='transition-all duration-300 hover:text-purple-200 relative group cursor-pointer'>
                      Home
                      <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
                    </li></Link>
                    <Link href="/About"><li className='transition-all duration-300 hover:text-purple-200 relative group cursor-pointer'>
                      About
                      <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
                    </li></Link>
                    <Link href="/Shortener"><li className='transition-all duration-300 hover:text-purple-200 relative group cursor-pointer'>
                      Shortener
                      <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
                    </li></Link>
                    <Link href="/Contact"><li className='transition-all duration-300 hover:text-purple-200 relative group cursor-pointer'>
                      Contact
                      <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
                    </li></Link>
                </ul>
                
                <div className='flex gap-3'>
                    <Link href="/Shortener">
                      <button className='bg-purple-500 rounded-lg shadow-lg px-5 py-2 font-bold text-sm transition-all duration-300 ease-in-out hover:bg-purple-600 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 active:scale-95 border border-purple-400'>
                        Try Now
                      </button>
                    </Link>
                    <Link href="/github">
                      <button className='bg-purple-800 rounded-lg shadow-lg px-5 py-2 font-bold text-sm transition-all duration-300 ease-in-out hover:bg-purple-900 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 active:scale-95 border border-purple-600'>
                        GitHub
                      </button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button 
                  onClick={toggleMenu}
                  type="button" 
                  className="inline-flex items-center justify-center p-2 rounded-md text-purple-100 hover:text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                  aria-controls="mobile-menu" 
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed */}
                  {!isOpen ? (
                    <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    /* Icon when menu is open */
                    <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
            </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} 
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-800 shadow-inner">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600 hover:text-white transition-colors duration-200">Home</span>
          </Link>
          <Link href="/About" onClick={() => setIsOpen(false)}>
            <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600 hover:text-white transition-colors duration-200">About</span>
          </Link>
          <Link href="/Shortener" onClick={() => setIsOpen(false)}>
            <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600 hover:text-white transition-colors duration-200">Shortener</span>
          </Link>
          <Link href="/Contact" onClick={() => setIsOpen(false)}>
            <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-600 hover:text-white transition-colors duration-200">Contact</span>
          </Link>
          
          <div className="mt-4 flex flex-col gap-2 px-3 pb-2">
            <Link href="/Shortener" onClick={() => setIsOpen(false)}>
               <button className="w-full bg-purple-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-purple-600 transition-all duration-200">
                 Try Now
               </button>
            </Link>
            <Link href="/github" onClick={() => setIsOpen(false)}>
               <button className="w-full bg-purple-900 text-white font-bold py-2 rounded-lg shadow-md hover:bg-black transition-all duration-200 border border-purple-700">
                 GitHub
               </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
