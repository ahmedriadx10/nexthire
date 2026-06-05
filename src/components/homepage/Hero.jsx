import React from 'react';
import { FiSearch, FiMapPin, FiBriefcase } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative min-h-150 w-full  text-white flex flex-col items-center justify-center px-4 overflow-hidden select-none">
      {/* Background ambient glow effect */}


      {/* Main Container */}
      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center">
        
        {/* Top Badge (50,000+ New Jobs) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r border border-white/8 backdrop-blur-md shadow-inner text-xs sm:text-sm text-white font-medium tracking-wide mb-8 animate-fade-in">
          <FiBriefcase className="text-orange-400 text-base" />
          <span>
            <strong className="text-white font-semibold">50,000+</strong> NEW JOBS THIS MONTH
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Find Your Dream Job Today
        </h1>

        {/* Subtitle */}
        <p className=" text-slate-400 text-base sm:text-xl max-w-3xl font-light leading-relaxed mb-12">
          HireLoop connects top talent with world-class companies. Browse thousands of 
          curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar Container */}
        <div className="w-full max-w-3xl bg-[#13131A]/80 border border-white/8 rounded-2xl p-2 flex flex-col md:flex-row items-center gap-2 shadow-2xl backdrop-blur-xl mb-8">
          
          {/* Left Input: Job Title */}
          <div className="w-full flex items-center gap-3 px-3 py-2 md:py-1">
            <FiSearch className="text-gray-400 text-xl shrink-0" />
            <input 
              type="text" 
              placeholder="Job title, skill or company" 
              className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* Divider Line (Only visible on desktop) */}
          <div className="hidden md:block h-8 w-px bg-white/15" />

          {/* Right Input: Location */}
          <div className="w-full flex items-center gap-3 px-3 py-2 md:py-1">
            <FiMapPin className="text-gray-400 text-xl shrink-0" />
            <input 
              type="text" 
              placeholder="Location or Remote" 
              className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button className="w-full md:w-auto bg-[#4F46E5] hover:bg-[#4338CA] transition-colors duration-200 text-white p-3.5 rounded-xl flex items-center justify-center shrink-0 cursor-pointer shadow-lg shadow-purple-600/20">
            <FiSearch className="text-xl" />
          </button>
        </div>

        {/* Trending Positions */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
          <span className="text-white">Trending Position</span>
          
          <button className="px-4 py-1.5 rounded-full bg-white/3 border border-white/8 text-white hover:bg-white/8 hover:border-white/15 transition-all duration-200 text-xs sm:text-sm cursor-pointer">
            Product Designer
          </button>
          
          <button className="px-4 py-1.5 rounded-full bg-white/3 border border-white/8 text-white hover:bg-white/8 hover:border-white/15 transition-all duration-200 text-xs sm:text-sm cursor-pointer">
            AI Engineering
          </button>
          
          <button className="px-4 py-1.5 rounded-full bg-white/3 border border-white/8 text-white hover:bg-white/8 hover:border-white/15 transition-all duration-200 text-xs sm:text-sm cursor-pointer">
            Dev-ops Engineer
          </button>
        </div>

      </div>


  
    </section>
  );
};

export default Hero;