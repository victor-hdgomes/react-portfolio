import React from "react"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="py-8" id="contact">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex items-center justify-between flex-col lg:flex-row text-center lg:text-left">
                    <div>
                        <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/50">
                            Get in <span className="text-gray-400">touch</span>
                        </h2>

                        <a href="mailto:victor.hgomes2002@gmail.com" className="md:text-4xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300">
                            victor.hgomes2002@gmail.com
                        </a>
                    </div>

                    <div className="text-white/50 mt-12">
                        <div className="mb-8">
                            <p className="text-lg mb-1">Phone</p>

                            <a target="_blank" href="https://wa.me/+5561991664479" className="text-2xl font-semibold underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-400 transition duration-300">
                                +55 (61) 9 9166-4479
                            </a>
                        </div>

                        <div className="text-lg mb-8">
                            <p className="font-bold">Location</p>
                            <p>Goiânia</p>
                            <p>Brazil</p>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-center mt-8 py-12">
                    <h1 className="hidden md:block text-[5rem] md:text-[7rem] lg:text-[10rem] font-bold text-white opacity-10">
                        VICTOR HUGO
                    </h1>

                    <h1 className="md:hidden relative text-[5rem] md:text-[7rem] lg:text[10rem] font-bold text-white opacity-10">
                        VICTOR <br /> HUGO
                    </h1>
                </div>

                <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                    <p className="text-gray-200 caption text-n-4 lg-block">
                        &copy; {year}. All rights reserved.
                    </p>

                    <ul className="flex gap-5 flex-wrap">
                        <a target="_blank" href="https://github.com/victor-hdgomes" className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full" aria-label="GitHub">
                            <AiFillGithub size={30} />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/victorgomes.02" className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full" aria-label="Instagram">
                            <AiFillInstagram size={30} />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/victor-hdgomes" className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full" aria-label="LinkedIn">
                            <AiFillLinkedin size={30} />
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}