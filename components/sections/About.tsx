"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Narrative Side */}
                    <div>
                        <SectionHeading
                            title="Beyond the Code"
                            subtitle="Bridging the gap between research and reality."
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
                        >
                            <p>
                                I don't just train models; I build <span className="text-white font-medium">resilient systems</span> that understand the world. My journey started with a fascination for how machines perceive reality, which led me to dive deep into <span className="text-white font-medium">Computer Vision</span> and <span className="text-white font-medium">IoT</span>.
                            </p>
                            <p>
                                From detecting early signs of driver fatigue to automating waste segregation for a cleaner planet, my work is driven by a single question: <span className="italic">"How can AI solve this problem in real-time?"</span>
                            </p>
                            <p>
                                Winner of the <span className="text-primary font-medium">Best Paper Award at NCRTET 2025</span>, I believe in research that doesn't just stay on paper but gets deployed where it matters most.
                            </p>
                        </motion.div>
                    </div>

                    {/* Graphical/Stats Side */}
                    <div className="relative">
                        <GlassCard className="p-8 relative z-10 backdrop-blur-xl bg-white/5 border-white/10">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h4 className="text-4xl font-bold text-white flex items-center">
                                        <Counter value={4} suffix="+" />
                                    </h4>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Major Projects</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-4xl font-bold text-primary">Award</h4>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Winning Researcher</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-4xl font-bold text-white flex items-center">
                                        <Counter value={96.78} suffix="%" />
                                    </h4>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Model Accuracy</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-4xl font-bold text-white flex items-center">
                                        <Counter value={100} suffix="" />
                                        <span className="text-primary text-2xl ml-1">ms</span>
                                    </h4>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider">Inference Speed</p>
                                </div>
                            </div>
                        </GlassCard>

                        {/* Decorative glow */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-[80px]" />
                    </div>

                </div>
            </div>
        </section>
    );
}
