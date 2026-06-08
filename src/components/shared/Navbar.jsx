"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MyNavlink from "../ui/MyNavlink";
import { Button, Separator } from "@heroui/react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
window.removeEventListener("scroll", handleScroll);
    };
  }, []);


const navlinks=[

  {name:'Browse Jobs',href:'/jobs'},
  {name:'Companies',href:'/companies'},
  {name:'Pricing',href:'/pricing'},
]


  return (
    <section className={`${scrolling ? "bg-white/10 backdrop-blur-md" : "bg-transparent"}  w-full fixed top-0 z-100  `}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center  py-4 px-6">
        <h2 className="text-2xl md:text-3xl  font-bold">
   <Link href='/'><span className="text-blue-500">Next</span>Hire</Link>
        </h2>

        <div className='hidden md:block'>

          <div className='flex items-center gap-4'>
        <div className="flex gap-6">
          {navlinks.map((link) => (
            <MyNavlink
              key={link.name}
     
path={link.href}
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              {link.name}
            </MyNavlink>
          ))}
        </div>

         <Separator orientation="vertical" />

         {/* auth links */}


<div className='flex items-center gap-4'>

<Link href='/login' className='text-blue-500 font-semibold'>Sign in</Link>

<Button className='text-white p-3 rounded-xl'  >

<Link href='/register' className='text-whtie font-semibold'>Get Started</Link>

</Button>

</div>



</div>
        </div>

      </nav>
    </section>
  );
};

export default Navbar;
