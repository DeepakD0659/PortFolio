import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "outline" | "secondary" | "accent";
    className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
    const variants = {
        default: "bg-primary/10 text-primary border-primary/20",
        outline: "border border-white/10 text-muted-foreground hover:text-white hover:border-white/30",
        secondary: "bg-secondary/10 text-secondary border-secondary/20",
        accent: "bg-accent text-accent-foreground border-white/10",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
