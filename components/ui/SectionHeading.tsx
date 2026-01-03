import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export function SectionHeading({
    title,
    subtitle,
    className,
    centered = false,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12 space-y-4",
                centered ? "text-center" : "text-left",
                className
            )}
        >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                    {title}
                </span>
                <span className="text-primary">.</span>
            </h2>
            {subtitle && (
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
