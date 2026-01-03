"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <SectionHeading
                    title="Journey"
                    subtitle="Experiences that shaped my engineering path."
                    centered
                />

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                    {portfolioData.experience?.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-10 h-10 -ml-5 md:-translate-x-1/2 flex items-center justify-center rounded-full bg-background border border-white/10 z-10 group-hover:scale-110 transition-transform duration-300">
                                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-slow" />
                            </div>

                            {/* Content */}
                            <GlassCard className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 p-6 md:p-8 hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <span className="text-primary text-sm font-mono mb-1 md:mb-0">{item.duration}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-muted-foreground border border-white/5">{item.type}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                                <h4 className="text-lg text-muted-foreground mb-4">{item.company}</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}

                    {/* Education Separator */}
                    <div className="relative flex items-center justify-center py-8">
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-2 md:-translate-x-1/2 bg-white/20 rounded-full z-10" />
                    </div>

                    {/* Education Items */}
                    {portfolioData.education?.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group"
                        >
                            <div className="absolute left-0 md:left-1/2 w-10 h-10 -ml-5 md:-translate-x-1/2 flex items-center justify-center rounded-full bg-background border border-white/10 z-10 group-hover:scale-110 transition-transform duration-300">
                                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-slow" />
                            </div>

                            <GlassCard className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 p-6 md:p-8 hover:border-secondary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <span className="text-secondary text-sm font-mono mb-1 md:mb-0">{item.duration}</span>
                                    <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-muted-foreground border border-white/5">Education</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                                <h4 className="text-lg text-muted-foreground mb-2">{item.school}</h4>
                                <p className="text-sm text-gray-400 font-medium">{item.score}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
