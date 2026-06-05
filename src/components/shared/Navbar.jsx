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
    <section className={`${scrolling ? "bg-white/10 backdrop-blur-sm" : "bg-transparent"} sticky top-0 z-10  `}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center  p-4">
        <h2 className="text-xl md:text-3xl  font-bold">
          <span className="text-blue-500">Next</span>Hire
        </h2>
      </nav>
    </section>
  );
};

export default Navbar;
