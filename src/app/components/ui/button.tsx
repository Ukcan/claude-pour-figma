import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-widest transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-cyan-primary/50",
  {
    variants: {
      variant: {
        default: "bg-cyan-primary text-bg-primary hover:bg-cyan-glow hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-cyan-primary/30 bg-transparent text-cyan-primary hover:bg-cyan-primary/10 hover:border-cyan-primary active:scale-95",
        secondary: "bg-bg-secondary text-text-primary border border-cyan-primary/20 hover:border-cyan-primary/40",
        ghost: "hover:bg-cyan-primary/10 text-cyan-primary",
        link: "text-cyan-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4",
        lg: "h-14 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
