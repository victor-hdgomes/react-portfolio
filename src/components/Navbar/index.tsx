import React, { useState } from "react";
import { navlinks } from './constants';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

export const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false);

    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () => {
        setNav(false);
    }

    return (
        <div className="z-50 fixed flex justify-center w-full text-white font-bold">
            <motion.div
                className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.5 }}
            >
                <ul className="flex flex-row p-2 space-x-8">
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.path} className="transform hover:skew-x-12 hover:text-white/50 transition-all duration-300 ease-in-out">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>

            <div className="md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2" onClick={toggleNav}>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <div className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${nav ? "translate-x-0" : "-translate-x-full"}`}>
                <ul className="flex flex-col items-center justify-center space-y-8 h-full">
                    {navlinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.path} onClick={closeNav} className="text-5xl">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
