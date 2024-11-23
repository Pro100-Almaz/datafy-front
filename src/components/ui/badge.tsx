import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-3 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        country: "border-none bg-[#F5F5F5] text-accent-foreground",
        current:
          "text-[#4AAF57] bg-[#4AAF57]/10 border-none hover:bg-[#4AAF57]/20",
        "legal-entity":
          "border-transparent bg-legal-entity text-white hover:bg-legal-entity/80",
        "individual-entrepreneur":
          "border-transparent bg-individual-entrepreneur text-white hover:bg-individual-entrepreneur/80",
        individual:
          "border-transparent bg-individual text-white hover:bg-individual/80",
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
