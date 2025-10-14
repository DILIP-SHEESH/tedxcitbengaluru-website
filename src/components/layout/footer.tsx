"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="relative w-full bg-black text-white overflow-hidden">
            {/* Gradient accent on top */}
            <div className="w-full h-1 bg-gradient-to-r from-[#E62B1E] via-red-600 to-[#8B1E15]" />

            {/* Main content section - full width container with responsive centering */}
            <div className="w-full">
                <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
                    {/* Heading - responsive sizing and full width centered */}
                    <h3 className="
                        w-full max-w-5xl mx-auto
                        text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                        font-extrabold tracking-tight leading-tight
                        text-white mb-8 sm:mb-10 md:mb-12 lg:mb-14
                        text-center
                    ">
                        Ready to spread ideas? Join the exclusive{" "}
                        <span className="text-[#E62B1E]">TEDxCITBengaluru</span> team.
                    </h3>

                    {/* Button with added top margin for spacing */}
                    <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
                        <button
                            onClick={() => router.push("/joinus")}
                            className="
                                relative inline-flex items-center justify-center
                                px-6 sm:px-8 md:px-12 lg:px-14 py-2.5 sm:py-3 md:py-4
                                rounded-full text-sm sm:text-base md:text-lg font-medium tracking-wide
                                bg-black text-[#E62B1E] border border-[#E62B1E]
                                transition-all duration-300 ease-in-out
                                shadow-[0_0_10px_rgba(230,43,30,0.2)]
                                hover:shadow-[0_0_25px_rgba(230,43,30,0.6)]
                                hover:bg-[#E62B1E] hover:text-black hover:scale-105
                                focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2
                                focus-visible:ring-offset-black focus-visible:ring-[#E62B1E]
                                active:scale-95
                                group
                            "
                            aria-label="Join the TEDxCITBengaluru team"
                        >
                            <span className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                                Apply Now
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.4"
                                    stroke="currentColor"
                                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Divider - full width */}
            <div className="w-full border-t border-gray-800" />

            {/* Copyright - full width centered with increased padding */}
            <div className="w-full">
                <div className="flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-10 md:py-12 lg:py-14">
                    <div className="text-center text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg max-w-5xl">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-white">TEDxCITBengaluru</span>. This independent
                        TEDx event is operated under license from TED.
                    </div>
                </div>
            </div>
        </footer>
    );
}