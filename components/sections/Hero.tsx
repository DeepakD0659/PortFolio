"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Hero() {
    const { personal } = portfolioData;
    const { scrollY } = useScroll();

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const roles = [
        "AI Engineer",
        "Computer Vision Dev",
        "Real-Time Systems",
        "Research Innovator"
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements with Parallax */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)] pointer-events-none"
            />
            <motion.div
                style={{ y: y2, opacity }}
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none"
            />

            {/* 3D-ish Floating Elements (Subtle) */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    rotate: [0, -5, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
            />

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">

                {/* Badge */}

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
                >
                    Building <span className="text-primary">Intelligent</span>
                    <br />
                    Systems That{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-white/50">
                        Solve Problems
                    </span>
                </motion.h1>

                {/* Role Morphing */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="h-8 md:h-12 overflow-hidden mb-8"
                >
                    <div className="flex flex-col items-center animate-role-morph">
                        {roles.map((role, i) => (
                            <span key={i} className="text-xl md:text-3xl text-muted-foreground font-medium block h-full leading-tight py-1">
                                {role}
                            </span>
                        ))}
                        <span className="text-xl md:text-3xl text-muted-foreground font-medium block h-full leading-tight py-1">
                            {roles[0]}
                        </span>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12"
                >
                    {personal.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-4 items-center justify-center"
                >
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href={personal.socials.find(s => s.name === "Resume")?.url || "/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-medium text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 backdrop-blur-sm"
                            >
                                <ArrowRight className="mr-2 h-4 w-4" />
                                View Resume
                            </Link>

                            <Link
                                href={personal.socials.find(s => s.name === "Resume")?.url || "/"}
                                download
                                className="group inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 font-medium text-black transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Download PDF
                            </Link>
                        </div>

                    </div>

                    <div className="flex gap-4 ml-4 pl-4 border-l border-white/10">
                        {personal.socials.map((social) => {
                            if (social.name === "Resume" || social.name === "Email") return null;
                            const Icon = social.icon;
                            return (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-white transition-colors hover:scale-110 transform duration-200"
                                >
                                    <Icon className="h-6 w-6" />
                                    <span className="sr-only">{social.name}</span>
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
