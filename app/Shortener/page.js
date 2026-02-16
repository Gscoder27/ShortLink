"use client"
import React, { useState } from 'react'

const Shortener = () => {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [generatedUrl, setGeneratedUrl] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
    setError('')
  }

  const handleShortUrlChange = (e) => {
    setShortUrl(e.target.value)
    setError('')
  }

  const generateRandomString = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = ''
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  const isValidUrl = (urlString) => {
    try {
      new URL(urlString)
      return true
    } catch (e) {
      return false
    }
  }

  const handleGenerate = async () => {
    // Validation
    if (!url.trim()) {
      setError('Please enter a URL')
      return
    }

    if (!isValidUrl(url)) {
      setError('Please enter a valid URL (include http:// or https://)')
      return
    }

    // Generate short code if not provided
    const shortPath = shortUrl.trim() || generateRandomString()

    setLoading(true)
    setError('')

    try {
      // Call the API to store the URL mapping
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url,
          shortCode: shortPath
        })
      })

      const data = await response.json()

      if (data.success) {
        setGeneratedUrl(data.shortUrl)
        setCopied(false)
      } else {
        setError(data.error || 'Failed to create short URL')
      }
    } catch (err) {
      console.error('Error creating short URL:', err)
      setError('Failed to connect to server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="min-h-[calc(100vh-72px)] bg-purple-100 flex items-center justify-center p-4">
      <div className="bg-purple-100 rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-2 text-purple-700">Generate Your Short URLs</h1>
        <p className="text-center text-gray-600 mb-8">Transform long URLs into short, shareable links</p>
        
        <div className="flex flex-col gap-4">
          {/* URL Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter Your URL <span className="text-red-500">*</span>
            </label>
            <input 
              type="text"
              placeholder='https://example.com/very-long-url'
              value={url}
              onChange={handleUrlChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Custom Short URL Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Custom Short URL (Optional)
            </label>
            <input 
              type="text" 
              placeholder='my-custom-link'
              value={shortUrl}
              onChange={handleShortUrlChange}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            <p className="text-xs text-gray-500 mt-1">Leave empty to auto-generate a random short URL</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Generate Button */}
          <button 
            onClick={handleGenerate}
            disabled={loading}
            className={`text-white rounded-lg shadow-lg px-6 py-3 font-bold text-lg transition-all duration-300 ease-in-out ${
              loading 
                ? 'bg-purple-400 cursor-not-allowed' 
                : 'bg-purple-500 hover:bg-purple-600 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 active:scale-95'
            }`}
          >
            {loading ? 'Generating...' : 'Generate Short URL'}
          </button>

          {/* Generated URL Display */}
          {generatedUrl && (
            <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-2 border-purple-300">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">Your Shortened URL:</h3>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <input 
                  type="text" 
                  value={generatedUrl} 
                  readOnly 
                  className="flex-1 bg-white border border-purple-300 rounded-lg p-3 text-purple-900 font-medium"
                />
                <button 
                  onClick={handleCopy}
                  className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                    copied 
                      ? 'bg-green-500 text-white' 
                      : 'bg-purple-600 text-white hover:bg-purple-700 hover:scale-105'
                  }`}
                >
                  {copied ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shortener
