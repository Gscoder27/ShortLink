import React from 'react'
import Link from 'next/link' // added import

const Navbar = () => {
  const github = 'https://github.com/Gscoder27/ShortLink';
  return (
    <nav 
      className='h-18 bg-purple-700 flex justify-between px-3 items-center text-white font-bold'
      style={{ 
        fontFamily: 'var(--font-dancing-script), cursive',
        fontWeight: '700',
        textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        letterSpacing: '0.5px'
      }}
    >
        <Link href="/" className='logo font-bold text-xl flex items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-105'>
            <div className='relative w-12 h-12 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110'>
              <img width="48" height="48" src="https://img.icons8.com/arcade/64/link.png" alt="link"/>
            </div>
            <span className='text-white font-extrabold text-2xl transition-all duration-300 group-hover:text-purple-100 group-hover:scale-105' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.3)' }}>
              Shortlink
            </span>
        </Link>
        <ul className='flex justify-center items-center gap-4 text-lg font-semibold'>
            <Link href="/"><li className='transition-all duration-300 hover:scale-110 relative group cursor-pointer'>
              Home
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </li></Link>
            <Link href="/About"><li className='transition-all duration-300 hover:scale-110 relative group cursor-pointer'>
              About
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </li></Link>
            <Link href="/Shortener"><li className='transition-all duration-300 hover:scale-110 relative group cursor-pointer'>
              Shortener
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </li></Link>
            
            <Link href="/Contact"><li className='transition-all duration-300 hover:scale-110 relative group cursor-pointer'>
              Contact
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </li></Link>
            <li className='flex gap-3'>
                <Link href="/Shortener">
                  <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold transition-all duration-300 ease-in-out hover:bg-purple-600 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 active:scale-95'>
                    Try Now
                  </button>
                </Link>
                <Link href="/github">
                  <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold transition-all duration-300 ease-in-out hover:bg-purple-600 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 active:scale-95'>
                    GitHub
                  </button>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
