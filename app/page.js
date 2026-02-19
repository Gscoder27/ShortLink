'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  const fullText = "Welcome! you have come to the right place. I know that long links are irretating to send so, I welcome you to the amazing URL shortener that you have been waiting for, it is finally here. We are Quick, Simple and Provide hassle-free link shortening."
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 30) // Speed of typing (30ms per character)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <div className='bg-purple-100 h-full'>
      <section className='grid grid-cols-1 lg:grid-cols-2 h-full min-h-[80vh] items-center'>
        <div className="flex flex-col gap-6 p-6 md:p-12 lg:p-16 items-center lg:items-start text-center lg:text-left justify-center order-2 lg:order-1">
          <p className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight'>
            {displayedText}
            {currentIndex < fullText.length && (
              <span className='animate-pulse text-purple-600'>|</span>
            )}
          </p>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl'>
          With our powerful and user-friendly platform, you can easily shorten long URLs into concise and shareable links. Say goodbye to cumbersome URLs and hello to a sleek and efficient way to share your content.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4'>
            <Link href="/Shortener" className="w-full sm:w-auto">
              <button className='w-full sm:w-auto bg-purple-600 rounded-xl shadow-lg px-8 py-3 font-bold text-lg text-white transition-all duration-300 ease-in-out hover:bg-purple-700 hover:shadow-xl hover:-translate-y-1 active:scale-95'>
                Try Now
              </button> 
            </Link>
            <Link href="/github" className="w-full sm:w-auto">
              <button className='w-full sm:w-auto bg-white border-2 border-purple-600 rounded-xl shadow-lg px-8 py-3 font-bold text-lg text-purple-700 transition-all duration-300 ease-in-out hover:bg-purple-50 hover:shadow-xl hover:-translate-y-1 active:scale-95'>
                GitHub
              </button>
            </Link>
          </div>
        </div>    
        <div className='relative w-full flex items-center justify-center p-6 lg:p-12 order-1 lg:order-2 h-[300px] sm:h-[400px] lg:h-full lg:min-h-[500px]'>
          <div className='relative w-full h-full max-w-lg lg:max-w-xl'>
            <Image 
              className="mix-blend-multiply object-contain drop-shadow-xl" 
              alt="Visual representation of URL shortening" 
              src={"/Vector.jpg"} 
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
