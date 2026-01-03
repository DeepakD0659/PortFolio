"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
    value: number;
    direction?: "up" | "down";
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

export function Counter({
    value,
    direction = "up",
    duration = 2,
    suffix = "",
    prefix = "",
    className,
}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [hasPlayed, setHasPlayed] = useState(false);

    const spring = useSpring(0, {
        damping: 30,
        stiffness: 100,
        duration: duration * 1000,
    });

    const display = useTransform(spring, (current) =>
        `${prefix}${current.toFixed(value % 1 === 0 ? 0 : 2)}${suffix}`
    );

    useEffect(() => {
        if (inView && !hasPlayed) {
            spring.set(value);
            setHasPlayed(true);
        }
    }, [inView, value, spring, hasPlayed]);

    return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
