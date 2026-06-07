import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden ">
      

      <div 
        className="relative w-full my-20 min-h-125 bg-[url('/assets/images/cta-bg.png')] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 bg-cover bg-top bg-no-repeat"
    
      >

        <div className=" absolute inset-0 bg-linear-to-b from-transparent via-[#050505]/40 to-[#050505] pointer-events-none"></div>


        <div className=" relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-tight text-white mb-6">
            Your next role is <br /> already looking for you
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg font-light max-w-xl mb-10 leading-relaxed">
            Build a profile in three minutes. The matches start arriving tomorrow morning.
          </p>

  
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="#" 
              className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-xl font-medium text-sm hover:bg-gray-200 transition-all duration-300 shadow-lg text-center"
            >
              Create a free account
            </Link>
            <Link 
              href="#" 
              className="w-full sm:w-auto bg-[#121214]/60 text-white px-8 py-3.5 rounded-xl font-medium text-sm border border-gray-800 hover:border-gray-600 hover:bg-[#121214] transition-all duration-300 text-center backdrop-blur-sm"
            >
              View pricing
            </Link>
          </div>
        </div>
      </div>



 
      <div className="  px-6 sm:px-12 lg:px-24 pb-12 pt-4 relative z-10">
        

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 mb-16">
          
  
          <div className="md:col-span-5 flex flex-col gap-4">
            <h3 className="text-2xl font-bold tracking-tight text-white">
         <span className="text-blue-500">Next</span>Hire
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

  
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
        
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white tracking-wider">Product</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Job discovery</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Worker AI</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Companies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Salary data</Link></li>
              </ul>
            </div>

    
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-white tracking-wider">Navigations</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Help center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Career library</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>


            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <h4 className="text-sm font-semibold text-white tracking-wider">Resources</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Brand Guideline</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Newsroom</Link></li>
              </ul>
            </div>

          </div>
        </div>


        <div className="border-t border-gray-900/60 my-6"></div>


        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 pt-2 text-xs text-gray-500">
          

          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#121214] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#121214] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all">
              <FaPinterestP size={14} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#121214] border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-all">
              <FaLinkedinIn size={14} />
            </a>
          </div>


          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-right">
            <span>Copyright {new Date().getFullYear()} — NextHire</span>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms & Policy - Privacy Guideline</Link>
          </div>

        </div>

      </div>
      {/* ----------------- FOOTER CONTENT END ----------------- */}

    </footer>
  );
};

export default Footer;