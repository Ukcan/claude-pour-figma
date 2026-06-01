import React from 'react';
import { CTAButton, type CTAButtonProps } from './CTA';
import { cn } from '../ui/utils';

/**
 * ButtonPrimary Component
 * Nomenclature Figma: Button/Primary
 * Style: CY-FOCUS (Solid Orange)
 */

export function ButtonPrimary({ children, className, ...props }: CTAButtonProps) {
  return (
    <CTAButton
      intent="primary"
      className={cn('group/pri font-body', className)}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </CTAButton>
  );
}
