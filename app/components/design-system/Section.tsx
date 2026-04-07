import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "bordered" | "highlighted";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-white",
      bordered: "bg-white border-t border-gray-200",
      highlighted: "bg-gray-50",
    };

    return <section ref={ref} className={cn("py-8", variants[variant], className)} {...props} />;
  }
);
Section.displayName = "Section";

const SectionHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-6 flex items-center justify-between", className)} {...props} />
  )
);
SectionHeader.displayName = "SectionHeader";

const SectionTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-xl font-bold text-gray-900", className)} {...props} />
  )
);
SectionTitle.displayName = "SectionTitle";

export { Section, SectionHeader, SectionTitle };
