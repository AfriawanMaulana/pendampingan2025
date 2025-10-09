import { motion } from "motion/react";
import { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["Home", "Sejarah Tor", "Konsep", "Anggota"];

    const scrollToSection = (id: string) => {
        const elementId = document.getElementById(id);
        if (elementId) elementId.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="sticky top-0 left-0 z-50 backdrop-blur-2xl flex w-full items-center justify-center p-2 md:p-4">
            {/* Desktop */}
            <div className="hidden md:flex gap-20">
                {navLinks.map((item, index) => (
                    <button 
                        key={index}
                        onClick={() => scrollToSection(item)} 
                        className="cursor-pointer font-semibold hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-black/50"
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden flex justify-around w-full items-center">
                <div className="flex items-center justify-center gap-2">
                    <img 
                        src="/logo.png" 
                        alt="tor" 
                        width={70} 
                        height={70}
                        className="object-contain" 
                    />
                    <h1 className="font-bold text-3xl">Tor Browser</h1>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                    {!isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    )}
                </button>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${isOpen ? 'opacity-100 flex' : 'opacity-0 hidden'} transition-all duration-250 ease-in-out flex-col w-full absolute top-21 bg-white/80 backdrop-blur-lg p-4 rounded-lg shadow-lg shadow-black/50 gap-4`}>
                    {navLinks.map((item, index) => (
                        <button 
                            key={index}
                            onClick={() => scrollToSection(item)}
                            className="cursor-pointer"
                        >
                            {item}
                        </button>
                    ))}
                </motion.div>
            </div>
        </nav>
    )
}