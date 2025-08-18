import {
  Wrench,
  House,
  ChartBar,
  Info,
  ListChecks,
  IdentificationCard,
  CalendarBlank,
  UserPlus,
  SignIn,
  EnvelopeSimple,
} from "phosphor-react";
// HamburgerMenu.js
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import "./menu-shine.css";

// Animation variants for button container
const buttonVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 18, delay: 0.16 },
  },
  closed: { opacity: 0, y: 40, transition: { duration: 0.18 } },
};

// Animation variants for sidebar
const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      when: "beforeChildren",
      delayChildren: 0.008,
      staggerChildren: 0.028,
    },
  },
  closed: {
    x: -300,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      when: "afterChildren",
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
};

// Animation variants for menu items
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 18, duration: 0.22 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.13 } },
};

const menuItems = [
  "Home",
  "My Dashboard",
  "About Us",
  "Interview Prep",
  "Resume Optimization",
  "Interview Schedule Management",
  "Contact Us",
];

export default function HamburgerMenu({ headerRef, tickerRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [topOffset, setTopOffset] = useState(0);

  // Refs
  const menuRef = useRef(null);

  // Dynamically set topOffset to align with bottom of ticker (if needed)
  useEffect(() => {
    // logic here if needed
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 left-5 z-50 w-10 h-10 flex flex-col justify-center items-center bg-white/70 backdrop-blur-sm rounded-full sm:top-6 sm:left-6"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[#1C375B] transition-transform duration-300 origin-center ${
            isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#1C375B] transition-all duration-300 my-1 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#1C375B] transition-transform duration-300 origin-center ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
          }`}
        />
      </button>
      {/* Backdrop & Menu Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="sidebar"
            ref={menuRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 bottom-0 left-0 h-screen min-h-screen z-60 w-72 sm:w-80 md:w-96 bg-white flex flex-col justify-between"
          >
            {/* Menu title aligned with ticker */}
            <motion.div
              className="w-full bg-blue-100 flex justify-start items-center shadow-inner px-2 sm:px-4 md:px-6 mt-20 border-b border-blue-200 py-[1.5rem] pb-5"
              style={{ height: undefined }}
              variants={itemVariants}
            >
              <span className="text-base sm:text-lg md:text-xl font-bold flex items-center gap-2">
                <Wrench
                  size={24}
                  weight="duotone"
                  className="text-orange-500 align-middle"
                />
                <span className="flex items-center">
                  <span className="text-blue-900">Tool</span>
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent ml-0.5">
                    box
                  </span>
                </span>
              </span>
            </motion.div>
            {/* Main content: list and buttons, spaced with flex-col justify-between */}
            <div className="flex flex-col flex-1 justify-between h-full">
              <motion.ul className="flex flex-col flex-1 p-0 m-0">
                {menuItems
                  .filter((item) => item !== "Contact Us")
                  .map((item, index) => (
                    <motion.li
                      key={item}
                      className="font-medium cursor-pointer text-sm sm:text-base md:text-lg bg-white hover:bg-blue-50 transition w-full h-12 sm:h-14 md:h-16 flex items-center justify-start p-0 m-0 overflow-hidden rounded-lg border-b border-blue-100"
                      variants={itemVariants}
                    >
                      <span className="flex items-center h-full w-full px-4 sm:px-6 text-left leading-tight text-sm sm:text-base md:text-lg break-words min-h-12 sm:min-h-14 md:min-h-16 gap-2 sm:gap-3">
                        {item === "Home" && (
                          <House
                            className="text-blue-500 flex-shrink-0"
                            size={20}
                            weight="duotone"
                          />
                        )}
                        {item === "My Dashboard" && (
                          <ChartBar
                            className="text-blue-500 flex-shrink-0"
                            size={20}
                            weight="duotone"
                          />
                        )}
                        {item === "About Us" && (
                          <Info
                            className="text-blue-500 flex-shrink-0"
                            size={20}
                            weight="duotone"
                          />
                        )}
                        {item === "Interview Prep" && (
                          <ListChecks
                            className="text-blue-500 flex-shrink-0"
                            size={20}
                            weight="duotone"
                          />
                        )}
                        {item === "Resume Optimization" && (
                          <IdentificationCard
                            className="text-blue-500 flex-shrink-0"
                            size={20}
                            weight="duotone"
                          />
                        )}
                        {item === "Interview Schedule Management" && (
                          <CalendarBlank
                            className="text-blue-500 flex-shrink-0"
                            size={20}
                            weight="duotone"
                          />
                        )}
                        <span className="flex-1 truncate font-medium">
                          {item}
                        </span>
                      </span>
                    </motion.li>
                  ))}
              </motion.ul>
              <div>
                <motion.div
                  className="px-4 sm:px-6 pb-4 flex flex-col gap-2"
                  variants={buttonVariants}
                >
                  <button className="w-full h-12 sm:h-14 md:h-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-md shadow-sm hover:from-blue-700 hover:to-blue-600 transition text-sm sm:text-base md:text-lg tracking-wide flex items-center px-4 sm:px-6 relative">
                    <span className="absolute left-4 sm:left-6 flex items-center">
                      <UserPlus
                        className="text-white align-middle"
                        size={20}
                        weight="duotone"
                      />
                    </span>
                    <span className="w-full flex justify-center items-center">
                      <span className="font-semibold">Sign Up</span>
                    </span>
                  </button>
                  <button className="w-full h-12 sm:h-14 md:h-16 border border-blue-600 text-blue-700 font-semibold rounded-md shadow-sm bg-white hover:bg-blue-50 transition text-sm sm:text-base md:text-lg tracking-wide flex items-center px-4 sm:px-6 mt-2 relative">
                    <span className="absolute left-4 sm:left-6 flex items-center">
                      <SignIn
                        className="text-blue-700 align-middle"
                        size={20}
                        weight="duotone"
                      />
                    </span>
                    <span className="w-full flex justify-center items-center">
                      <span className="font-semibold">Login</span>
                    </span>
                  </button>
                </motion.div>
                {/* Contact Us below buttons */}
                <motion.div
                  className="px-4 sm:px-6 pb-4"
                  variants={buttonVariants}
                >
                  <button className="w-full h-10 sm:h-12 md:h-14 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-md shadow-sm hover:from-orange-500 hover:to-orange-700 transition text-sm sm:text-base md:text-lg tracking-wide flex items-center px-4 sm:px-6 relative">
                    <span className="absolute left-4 sm:left-6 flex items-center">
                      <EnvelopeSimple
                        className="text-white align-middle"
                        size={20}
                        weight="duotone"
                      />
                    </span>
                    <span className="w-full flex justify-center items-center">
                      <span className="font-semibold">Contact Us</span>
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
