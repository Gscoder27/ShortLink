'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function GitHubRedirect() {
  const router = useRouter()
  const [dots, setDots] = useState('')

  useEffect(() => {
    // Animate the dots
    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return ''
        return prev + '.'
      })
    }, 400)

    // Redirect after 2 seconds
    const redirectTimer = setTimeout(() => {
      window.open('https://github.com/Gscoder27/ShortLink', '_blank')
      router.push('/') // Navigate back to home page
    }, 2000)

    return () => {
      clearInterval(dotsInterval)
      clearTimeout(redirectTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center">
        <div className="text-6xl mb-6 animate-bounce">
          🚀
        </div>
        <h1 className="text-2xl font-bold text-purple-700 mb-4">
          Redirecting to GitHub
        </h1>
        <p className="text-gray-600 text-lg">
          You are being redirected to GitHub repo<span className="inline-block w-8 text-left">{dots}</span>
        </p>
        <div className="mt-8">
          <div className="w-full bg-purple-200 rounded-full h-2 overflow-hidden">
            <div className="bg-purple-600 h-2 rounded-full animate-[loading_2s_ease-in-out]" 
                 style={{ animation: 'loading 2s ease-in-out forwards' }}></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes loading {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
