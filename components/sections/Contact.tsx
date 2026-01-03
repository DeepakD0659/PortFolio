"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <SectionHeading
                    title="Get in Touch"
                    subtitle="Ready to build something extraordinary?"
                    centered
                />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <p className="text-lg text-muted-foreground">
                            Whether you have a question, a project idea, or just want to discuss the future of AI, my inbox is always open.
                        </p>

                        <div className="space-y-4">
                            <Link
                                href={`mailto:${portfolioData.personal.email}`}
                                className="flex items-center gap-4 text-white hover:text-primary transition-colors group"
                            >
                                <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest ">Email</p>
                                    <p className="font-medium">{portfolioData.personal.email}</p>
                                </div>
                            </Link>

                            <div className="flex gap-4 pt-4">
                                {portfolioData.personal.socials.map((social) => {
                                    if (social.name === "Resume" || social.name === "Email") return null;
                                    const Icon = social.icon;
                                    return (
                                        <Link
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary/50 text-muted-foreground hover:text-white transition-all duration-300"
                                        >
                                            <Icon className="h-5 w-5" />
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Simple Form Placeholder */}
                    <GlassCard className="p-8">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Let's build something crazy..."
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20 resize-none"
                                />
                            </div>
                            <button className="w-full h-12 rounded-lg bg-white/10 hover:bg-primary/20 hover:text-primary text-white font-medium border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 group">
                                Send Message
                                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </GlassCard>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-24 py-8 border-t border-white/5 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} {portfolioData.personal.name}.</p>
            </footer>
        </section>
    );
}
