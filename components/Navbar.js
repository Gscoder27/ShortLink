import React from 'react'
import Link from 'next/link' // added import

const Navbar = () => {
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
        <div className='logo font-bold text-xl'>
            <Link href="/"><span>Shortlink</span></Link>
        </div>
        <ul className='flex justify-center items-center gap-4 text-lg font-semibold'>
            <Link href="/"><li className='transition-all duration-300 hover:scale-110 relative group cursor-pointer'>
              Home
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </li></Link>
            <Link href="/about"><li className='transition-all duration-300 hover:scale-110 relative group cursor-pointer'>
              About
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </li></Link>
            <Link href="/Shortener"><li className='transition-all duration-300 hover:scale-110 relative group cursor-pointer'>
              Shortener
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </li></Link>
            
            <Link href="/contact"><li className='transition-all duration-300 hover:scale-110 relative group cursor-pointer'>
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
