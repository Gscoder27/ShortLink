import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About - ShortLink',
  description: 'Learn more about ShortLink and our mission to simplify URL sharing.',
};

const About = () => {
  return (
    <div className="min-h-[calc(100vh-72px)] bg-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 sm:text-6xl tracking-tight mb-4 drop-shadow-sm">
            About ShortLink
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-600 font-light">
            Simplifying the web, one link at a time.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-purple-500 inline-block pb-2">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At ShortLink, we believe sharing information should be effortless. 
              Long, complex URLs are clunky and prone to errors. 
              Our mission is to provide a <span className="font-semibold text-purple-700">fast, reliable, and secure</span> way to shorten your links 
              and track their performance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a marketer tracking campaigns, a developer sharing code, 
              or just sharing a video with friends, ShortLink is designed for you.
            </p>
          </div>
          <div className="relative h-72 w-full bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-500">
             <div className="text-9xl animate-bounce">🚀</div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-20 transform transition-all hover:shadow-purple-200/50">
          <div className="px-8 py-12 sm:px-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              
              {/* Feature 1 */}
              <div className="text-center group p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-purple-100 text-purple-600 mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Instant redirection and link generation. No waiting around.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center group p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-purple-100 text-purple-600 mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                  🔒
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">
                  Your data is safe with us. We prioritize security and uptime.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center group p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-purple-100 text-purple-600 mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                  📊
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Analytics</h3>
                <p className="text-gray-600">
                  Track clicks and gain insights into your audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Ready to get started?</h2>
          <Link href="/Shortener">
            <button className="inline-flex items-center justify-center px-10 py-4 border-2 border-transparent text-xl font-bold rounded-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform active:scale-95">
              Shorten a Link Now ✨
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
