"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import xeonwhite from "@/assets/xeonwhite.png";
import xeonlogo from "@/assets/xeonlogo.png";

export default function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Check if window is defined (to avoid SSR errors)
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkTheme(mediaQuery.matches);

      // Optional: Add listener for theme changes
      const handler = (e) => setIsDarkTheme(e.matches);
      mediaQuery.addEventListener("change", handler);

      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center w-[92%] h-20 mx-auto">
        <div>
          <a href="https://www.xeontechnology.ltd/">
            <Image
              src={isDarkTheme ? xeonlogo : xeonwhite}
              width={150}
              height={60}
              alt="Xeon logo"
            />
          </a>
        </div>
        <div className="flex gap-[2vw]">
          <a
            className="hover:text-[#c2cc33]"
            href="https://www.xeontechnology.ltd/"
          >
            Home
          </a>
          <a className="hover:text-[#c2cc33]" href="#">
            Products
          </a>
          <a className="hover:text-[#c2cc33]" href="#">
            Services
          </a>
          <a
            className="hover:text-[#c2cc33]"
            href="https://www.xeontechnology.ltd/about-us"
          >
            About Us
          </a>
          <a
            className="hover:text-[#c2cc33]"
            href="https://www.xeontechnology.ltd/contact-us"
          >
            Contact Us
          </a>
          <a
            className="hover:text-[#c2cc33]"
            href="http://localhost:3000/joinWithUs"
          >
            Career
          </a>
        </div>
      </nav>
    </>
  );
}
