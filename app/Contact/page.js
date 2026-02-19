import React from 'react';

export const metadata = {
  title: 'Contact - ShortLink',
  description: 'Get in touch with the ShortLink team.',
};

const Contact = () => {
  return (
    <div className="flex-grow bg-purple-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        <div className="bg-purple-700 py-10 px-8 text-center">
            <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">Get in Touch</h1>
            <p className="text-purple-200 text-lg">We'd love to hear from you!</p>
        </div>

        <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                {/* Contact Info */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-200 pb-2">Contact Info</h2>
                    
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 text-xl shadow-sm">
                                📧
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Email</h3>
                            <p className="mt-1 text-gray-600">support@shortlink.com</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 text-xl shadow-sm">
                                📍
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Location</h3>
                            <p className="mt-1 text-gray-600">123 Web Dev Lane<br />Internet City, 10101</p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 text-xl shadow-sm">
                                🐦
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Social</h3>
                            <p className="mt-1 text-gray-600">@ShortLinkApp</p>
                        </div>
                    </div>
                </div>

                {/* Simple Form Placeholder or Message */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Send a Message</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Have a question, suggestion, or just want to say hi? 
                        Drop us an email and we'll get back to you as soon as possible.
                    </p>
                    <a href="mailto:support@shortlink.com" className="block w-full">
                        <button className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
                            Send Email
                        </button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
