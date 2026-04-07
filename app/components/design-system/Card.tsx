import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-lg overflow-hidden transition-all duration-200", {
  variants: {
    variant: {
      default: "bg-white border border-gray-200 hover:shadow-lg",
      highlighted: "bg-white border-2 border-[#0055A4] hover:shadow-xl",
      colored: "hover:shadow-lg",
      flat: "bg-gray-50",
    },
    clickable: {
      true: "cursor-pointer",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    clickable: false,
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, clickable, ...props }, ref) => {
    return (
      <div className={cn(cardVariants({ variant, clickable, className }))} ref={ref} {...props} />
    );
  }
);
Card.displayName = "Card";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6", className)} {...props} />
);
CardContent.displayName = "CardContent";

export { Card, CardContent, cardVariants };
