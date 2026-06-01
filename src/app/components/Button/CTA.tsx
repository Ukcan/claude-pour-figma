import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";
import { cn } from "../ui/utils";

/**
 * Button/CTA Component
 * Nomenclature Figma: Button/CTA
 * Style: CY-FOCUS (Dark Graphite + Orange)
 */

const ctaButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-button)] text-[15px] font-medium transition-all duration-200 shrink-0 outline-none select-none disabled:opacity-40 disabled:pointer-events-none active:translate-y-[1px] min-h-[44px]",
  {
    variants: {
      intent: {
        primary: "button-primary",
        secondary: "button-secondary",
        ghost: "button-ghost",
      },
      size: {
        s: "h-10 px-5 text-[14px] tracking-[0.01em]",
        m: "h-11 px-7 text-[15px] tracking-[0.01em]",
        l: "h-12 px-8 text-[15px] tracking-[0.01em]",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "m",
    },
  }
);

export interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, intent, size, asChild = false, isLoading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        ref={ref}
        className={cn(ctaButtonVariants({ intent, size, className }))}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {children}
          </div>
        ) : (
          children
        )}
        {/* Gooey blob fill — animated on hover (primary & secondary only) */}
        {!asChild && (intent === 'primary' || intent === 'secondary' || intent == null) && (
          <span className="cta-blobs" aria-hidden="true">
            <span className="cta-blobs__wrap">
              <span className="cta-blob" />
              <span className="cta-blob" />
              <span className="cta-blob" />
              <span className="cta-blob" />
            </span>
          </span>
        )}
      </Comp>
    );
  }
);

CTAButton.displayName = "CTAButton";

export { CTAButton, ctaButtonVariants };