"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import xeonwhite from "@/assets/xeonwhite.png";
import xeonlogo from "@/assets/xeonlogo.png";

export default function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Check if window is defined (to avoid SSR errors)
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkTheme(mediaQuery.matches);
      console.log("isDarkTheme", mediaQuery.matches);

      // Optional: Add listener for theme changes
      const handler = (e) => setIsDarkTheme(e.matches);
      mediaQuery.addEventListener("change", handler);

      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  const currentPath = usePathname();

  return (
    <>
      <nav className="flex justify-between items-center w-[92%] h-20 mx-auto">
        <div>
          <a href="https://www.xeontechnology.ltd/">
            <Image
              src={isDarkTheme ? xeonwhite : xeonlogo}
              width={150}
              height={60}
              alt="Xeon logo"
            />
          </a>
        </div>
        <div className="flex gap-[2vw]">
          <Link
            href="/"
            className={`hover:text- ${currentPath === "/" ? "text-[#c2cc33]" : ""
              }`}
          >
            Home
          </Link>
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
          <Link
            href="/joinWithUs"
            className={`hover:text-[#c2cc33] ${currentPath === "/joinWithUs" ? "text-[#c2cc33]" : ""
              }`}
          >
            <span>Career</span><sub className="Dev text-xs text-red-600 mt-10">dev</sub>
          </Link>
          <Link
            href="/employer"
            className={`hover:text- ${currentPath === "/employer" ? "text-[#c2cc33]" : ""
              }`}
          >
            <span>Employer</span><sub className="Dev text-xs text-red-600 mt-10">dev</sub>
          </Link>
        </div>
      </nav>
    </>
  );
}
