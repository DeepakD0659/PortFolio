"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300",
                isScrolled ? "py-4" : "py-6"
            )}
        >
            <nav
                className={cn(
                    "flex items-center gap-1 md:gap-4 px-2 md:px-6 py-2 rounded-full transition-all duration-300 backdrop-blur-md",
                    isScrolled
                        ? "bg-black/80 border border-white/10 shadow-lg shadow-primary/5"
                        : "bg-transparent border border-transparent"
                )}
            >

                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="px-3 md:px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors relative group"
                    >
                        {item.name}
                        <span className="absolute inset-x-0 bottom-1 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                ))}
            </nav>
        </motion.header>
    );
}
