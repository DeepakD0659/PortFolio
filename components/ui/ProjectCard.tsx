"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, AlertTriangle, Lightbulb, TrendingUp, Smartphone, Download } from "lucide-react";
import Link from "next/link";
import { Badge } from "./Badge";
import { GlassCard } from "./GlassCard";
import { Counter } from "./Counter";

interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        problem: string;
        solution: string;
        impact: string;
        techStack: string[];
        links: {
            github: string;
            demo: string;
        };
        // Optional APK field
        apk?: {
            url: string;
            version: string;
            size: string;
        };
        metrics: { label: string; value: string; suffix: string }[];
    };
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <GlassCard
            className="h-full flex flex-col hover:border-primary/30 transition-colors p-5" // Compact padding
            animate={true}
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                    {project.title}
                </h3>
                <div className="flex gap-2">
                    <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
                    >
                        <Github className="h-4 w-4" />
                    </Link>
                    <Link
                        href={project.links.demo}
                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
                    >
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            <div className="space-y-3 mb-6 flex-grow">
                <div className="flex gap-3 items-start">
                    <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                        <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block mb-0.5">The Problem</span>
                        <p className="text-xs text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                </div>

                <div className="w-px h-3 bg-white/10 ml-2" />

                <div className="flex gap-3 items-start">
                    <Lightbulb className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-0.5">My Solution</span>
                        <p className="text-xs text-foreground/90 leading-relaxed">{project.solution}</p>
                    </div>
                </div>

                <div className="w-px h-3 bg-white/10 ml-2" />

                <div className="flex gap-3 items-start">
                    <TrendingUp className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                    <div>
                        <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider block mb-0.5">Impact</span>
                        <p className="text-xs text-muted-foreground leading-relaxed">{project.impact}</p>
                    </div>
                </div>
            </div>

            {project.apk && (
                <div className="mb-6">
                    <a
                        href={project.apk.url}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full p-3 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all group mb-2"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-md text-primary">
                                <Smartphone className="h-4 w-4" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-white group-hover:text-primary transition-colors">Download APK</div>
                                <div className="text-[10px] text-muted-foreground">
                                    {project.apk.version} • {project.apk.size} • Android
                                </div>
                            </div>
                        </div>
                        <Download className="h-4 w-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <p className="text-[10px] text-muted-foreground/60 text-center px-2">
                        ⚠️ Demo / Educational use only. Not on Play Store.
                    </p>
                </div>
            )}

            <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-white/5 mb-4">
                {project.metrics.map((metric, i) => {
                    const numValue = parseFloat(metric.value);
                    const isNumber = !isNaN(numValue);

                    return (
                        <div key={i} className="text-center">
                            <div className="text-lg font-bold text-white mb-0.5">
                                {isNumber ? (
                                    <Counter value={numValue} suffix={metric.suffix} />
                                ) : (
                                    <span>{metric.value}{metric.suffix}</span>
                                )}
                            </div>
                            <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{metric.label}</div>
                        </div>
                    )
                })}
            </div>

            <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-[10px] px-2 py-0.5">
                        {tech}
                    </Badge>
                ))}
            </div>
        </GlassCard>
    );
}
