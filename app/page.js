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
    <main className='bg-purple-100 min-h-screen'>
      <section className='grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-72px)]'>
        <div className="flex flex-col gap-4 p-6 md:p-8 lg:p-4 items-center justify-center max-w-4xl mx-auto w-full">
          <p className='text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center lg:text-left'>
            {displayedText}
            {currentIndex < fullText.length && (
              <span className='animate-pulse'>|</span>
            )}
          </p>
          <p className='text-sm md:text-base text-center px-4 md:px-0'>
          With our powerful and user-friendly platform, you can easily shorten long URLs into concise and shareable links. Say goodbye to cumbersome URLs and hello to a sleek and efficient way to share your content. our URL shortener will make your links look clean and professional across muliple platforms you are willing to share. Try it out now and experience the convenience of shortened URLs at your fingertips! Join us today and start shortening your URLs for a more streamlined online experience!
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto'>
            <button className='bg-purple-500 rounded-lg shadow-lg px-6 py-2 font-bold transition-all duration-300 ease-in-out hover:bg-purple-600 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 active:scale-95 text-white w-full sm:w-auto'>
              <Link href="/Shortener">Try Now</Link>
            </button> 
            <button className='bg-purple-500 rounded-lg shadow-lg px-6 py-2 font-bold transition-all duration-300 ease-in-out hover:bg-purple-600 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 active:scale-95 text-white w-full sm:w-auto'>
              GitHub
            </button>
          </div>
        </div>    
        <div className='relative h-[350px] sm:h-[350px] lg:h-auto min-h-[350px] w-full flex items-center justify-center p-4 lg:p-8'>
          <div className='relative w-full h-full max-w-2xl max-h-[500px]'>
            <Image 
              className="mix-blend-darken object-contain" 
              alt="Visual representation of a vector" 
              src={"/Vector.jpg"} 
              fill={true}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
