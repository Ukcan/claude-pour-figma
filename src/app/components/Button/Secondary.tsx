import React from 'react';
import { CTAButton, type CTAButtonProps } from './CTA';
import { cn } from '../ui/utils';

/**
 * ButtonSecondary Component
 * Nomenclature Figma: Button/Secondary
 * Style: CY-FOCUS (Transparent Bordered)
 */

export function ButtonSecondary({ children, className, ...props }: CTAButtonProps) {
  return (
    <CTAButton
      intent="secondary"
      className={cn('group/sec font-body', className)}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </CTAButton>
  );
}
