import React, { useRef } from "react";
import SignupForm from "./SignupForm";
import HamburgerMenu from "./HamburgerMenu";
import FeatureTicker from "./FeatureTicker";

export default function App() {
  const headerRef = useRef(null);
  const tickerRef = useRef(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#F5F5F5] via-white to-[#E9EEF3]">
      {/* Header */}
      <header
        ref={headerRef}
        className="w-full bg-white/70 backdrop-blur-sm fixed top-0 left-0 z-40 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 h-16 sm:h-20 flex items-center relative">
          <div className="flex items-center h-full">
            <HamburgerMenu headerRef={headerRef} tickerRef={tickerRef} />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold select-none whitespace-nowrap">
              hired
              <span className="bg-gradient-to-r from-[#CD4236] to-[#FFB86B] bg-clip-text text-transparent">
                .io
              </span>
            </h1>
            <span className="block text-xs sm:text-sm md:text-base text-gray-500 font-medium mt-1 tracking-wide text-center">
              Empowering developers to land their dream job, faster.
            </span>
          </div>
          <div className="flex items-center h-full ml-auto w-8 sm:w-10 h-8 sm:h-10" />
        </div>
      </header>

      {/* Feature Ticker */}
      <div ref={tickerRef} className="pt-16 sm:pt-20 w-full">
        <FeatureTicker />
      </div>

      {/* Main Content */}
      <div
        className="flex-1 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/juanjo-jaramillo-mZnx9429i94-unsplash.jpg')",
        }}
      >
        <main className="flex items-center justify-center w-full min-h-[calc(100vh-4rem-3.5rem)] sm:min-h-[calc(100vh-5rem-3.5rem)]">
          <SignupForm />
        </main>
      </div>
    </div>
  );
}
