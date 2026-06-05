"use client";

import { useEffect, useState } from "react";

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

  return (
    <section className={`${scrolling ? "bg-white/10 backdrop-blur-md" : "bg-transparent"}  w-full fixed top-0 z-100  `}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center  py-4 px-6">
        <h2 className="text-2xl md:text-3xl  font-bold">
          <span className="text-blue-500">Next</span>Hire
        </h2>
      </nav>
    </section>
  );
};

export default Navbar;
