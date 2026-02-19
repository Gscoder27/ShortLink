"use client";
import React, { useState } from "react";
import Link from "next/link";
import QRCode from "react-qr-code";

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setError("");
  };

  const handleShortUrlChange = (e) => {
    setShortUrl(e.target.value);
    setError("");
  };

  const generateRandomString = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const isValidUrl = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleGenerate = async () => {
    // Validation
    if (!url.trim()) {
      setError("Please enter a URL");
      return;
    }

    if (!isValidUrl(url)) {
      setError("Please enter a valid URL (include http:// or https://)");
      return;
    }

    // Generate short code if not provided
    const shortPath = shortUrl.trim() || generateRandomString();

    setLoading(true);
    setError("");

    try {
      // Call the API to store the URL mapping
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
          shorturl: shortPath,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Generate the full short URL
        const fullShortUrl = `${window.location.origin}/${shortPath}`;
        setGeneratedUrl(fullShortUrl);
        setCopied(false);
        setUrl(""); 
        setShortUrl("");
        // setGeneratedUrl(true);
        console.log("Short URL generated:", fullShortUrl);
        alert("Short URL generated successfully!");
      } else {
        setError(data.message || "Failed to create short URL");
      }
    } catch (err) {
      console.error("Error creating short URL:", err);
      setError("Failed to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (

    <div className="flex-grow bg-purple-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 max-w-2xl w-full border border-purple-100">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          Generate Your Short URLs
        </h1>
        <p className="text-center text-gray-500 mb-10 text-lg">
          Transform long URLs into short, shareable links
        </p>

        <div className="flex flex-col gap-6">
          {/* URL Input */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Enter Your URL <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="https://example.com/very-long-url"
              value={url}
              onChange={handleUrlChange}
              className="border-2 border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all text-gray-700 bg-gray-50"
            />
          </div>

          {/* Custom Short URL Input */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Custom Short URL (Optional)
            </label>
            <input
              type="text"
              placeholder="my-custom-link"
              value={shortUrl}
              onChange={handleShortUrlChange}
              className="border-2 border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all text-gray-700 bg-gray-50"
            />
            <p className="text-xs text-gray-400 mt-2 ml-1">
              Leave empty to auto-generate a random short URL
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-r-lg animate-pulse">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className={`text-white rounded-xl shadow-lg px-6 py-4 font-bold text-lg transition-all duration-300 ease-in-out transform ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-1 active:scale-95"
            }`}
          >
          {loading ? "Generating..." : "Generate Short URL"}
          </button>
          
          {/* Results Section */}
          {(generatedUrl) && (
             <div className="animate-fade-in-up">
                 {/* QR Code Display */}
                <div className="flex justify-center mt-8 mb-6">
                  <div className="p-4 bg-white rounded-2xl shadow-inner border border-gray-200">
                    <QRCode
                      value={generatedUrl}
                      size={148}
                      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                      viewBox={`0 0 256 256`}
                    />
                    <p className="text-center text-xs font-bold text-gray-400 mt-2 uppercase tracking-wide">Scan Me</p>
                  </div>
                </div>

                {/* Generated URL Display */}
                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-200">
                  <h3 className="text-sm font-bold text-purple-800 uppercase tracking-wider mb-3">
                    Your Shortened URL
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      href={generatedUrl} 
                      target="_blank"
                      className="flex-1 bg-white border-2 border-purple-200 rounded-xl p-3 text-purple-700 font-medium hover:border-purple-400 transition-all flex items-center overflow-x-auto"
                    >
                      {generatedUrl}
                    </Link>
                    <div className="flex gap-2">
                        <button
                          onClick={handleCopy}
                          className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-md ${
                            copied
                              ? "bg-green-500 text-white transform scale-105"
                              : "bg-white text-purple-700 border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300"
                          }`}
                        >
                          {copied ? "Copied!" : "Copy"}
                        </button>
                        <button
                          onClick={() => window.open(generatedUrl, "_blank")}
                          className="flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          Visit
                        </button>
                    </div>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shortener;
