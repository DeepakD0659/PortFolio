"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function Skills() {
    const { skills } = portfolioData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-24 relative">
            {/* Background Grid - subtle */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <SectionHeading
                    title="Technical Arsenal"
                    subtitle="Tools and technologies I use to build independent systems."
                    centered
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skillGroup, idx) => (
                        <motion.div key={skillGroup.category} variants={item}>
                            <GlassCard className="h-full hover:border-primary/30 transition-colors group">
                                <h3 className="text-xl font-bold mb-6 text-white group-hover:text-primary transition-colors">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="bg-white/5 border-white/5 hover:bg-white/10">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
