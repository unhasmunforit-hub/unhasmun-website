"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/app/constants/navigation";
import { useScrolled } from "@/app/hooks/useScrolled";

export default function Navbar() {
  const isScrolled = useScrolled(20);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-3 md:px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center justify-between w-full max-w-3xl px-4 md:px-10 py-2.5 md:py-4 rounded-[2rem] md:rounded-[3rem] border border-white/20 shadow-xl transition-all duration-300 ${isScrolled
            ? "bg-white/70 backdrop-blur-lg"
            : "bg-white/90 backdrop-blur-sm"
          }`}
      >
        {/* Logo — left side (mobile & desktop) */}
        <Link href="/" className="flex-shrink-0 md:hidden">
          <Image
            src="/main-logo.webp"
            alt="UNHAS MUN"
            width={36}
            height={36}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Nav Items — center */}
        <div className="hidden md:flex items-center gap-1 mx-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-label={`Navigate to ${item.name}`}
                className="relative px-8 py-2 text-sm font-medium transition-colors"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-600 hover:text-black"
                    }`}
                >
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-mun-red rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Hamburger — right side (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`block w-5 h-0.5 bg-mun-dark rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-5 h-0.5 bg-mun-dark rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 inset-x-3 md:hidden bg-white/90 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col py-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-6 py-3 text-sm font-medium transition-colors ${isActive
                        ? "bg-mun-red text-white"
                        : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
