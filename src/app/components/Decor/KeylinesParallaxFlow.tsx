import React from 'react';

/**
 * DecorKeylinesParallaxFlow Component
 * Nomenclature: Decor/KeylinesParallaxFlow
 * Export: DecorKeylinesParallaxFlow
 *
 * BG / FX_KeylinesParallaxFlow_Dark
 * Purely decorative parallax keylines background — dark mode only.
 *
 * 3 layers of horizontal repeating lines drifting at different speeds
 * (simulated parallax), masked with soft radial/linear fade.
 *
 * NON-DESTRUCTIVE:
 * - position: fixed, inset: 0, pointer-events: none
 * - z-index: 0 (content sits above at z-10+)
 * - No impact on layout, scrolling, or click targets
 * - prefers-reduced-motion: animations disabled
 * - Light mode: fully hidden (opacity 0)
 */

const KEYLINES_STYLES = `
/* === FX Keylines Parallax Flow — Scoped, non-destructive === */

.fx-bg-keylines-parallax {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.6s ease;
}

/* Light mode (Mercury) — very subtle warm keylines */
:root:not(.dark) .fx-bg-keylines-parallax {
  opacity: 0.03;
}

/* Dark mode — slightly stronger */
.dark .fx-bg-keylines-parallax {
  opacity: 0.15;
}

/* Each layer: absolute, slightly oversized for tilt headroom */
.fx-bg-keylines-parallax .fx-kp-layer {
  position: absolute;
  inset: -10%;
  will-change: background-position;
}

/* Layer 1 — primary fine lines (warm brown for light, white for dark) */
.fx-kp-l1 {
  background-image:
    repeating-linear-gradient(
      to bottom,
      rgba(26, 23, 20, 0.06) 0px,
      rgba(26, 23, 20, 0.06) 1px,
      transparent 1px,
      transparent 64px
    );
  animation: fxKpDrift1 140s linear infinite;
}

.dark .fx-kp-l1 {
  background-image:
    repeating-linear-gradient(
      to bottom,
      rgba(245, 240, 232, 0.05) 0px,
      rgba(245, 240, 232, 0.05) 1px,
      transparent 1px,
      transparent 64px
    );
}

/* Layer 2 — secondary, wider spacing, softer */
.fx-kp-l2 {
  background-image:
    repeating-linear-gradient(
      to bottom,
      rgba(26, 23, 20, 0.04) 0px,
      rgba(26, 23, 20, 0.04) 1px,
      transparent 1px,
      transparent 92px
    );
  opacity: 0.8;
  animation: fxKpDrift2 200s linear infinite;
}

.dark .fx-kp-l2 {
  background-image:
    repeating-linear-gradient(
      to bottom,
      rgba(245, 240, 232, 0.03) 0px,
      rgba(245, 240, 232, 0.03) 1px,
      transparent 1px,
      transparent 92px
    );
}

/* Layer 3 — accent tint (gold hint), widest spacing */
.fx-kp-l3 {
  background-image:
    repeating-linear-gradient(
      to bottom,
      rgba(201, 169, 110, 0.04) 0px,
      rgba(201, 169, 110, 0.04) 1px,
      transparent 1px,
      transparent 109px
    );
  opacity: 0.6;
  animation: fxKpDrift3 260s linear infinite;
}

.dark .fx-kp-l3 {
  background-image:
    repeating-linear-gradient(
      to bottom,
      rgba(201, 169, 110, 0.035) 0px,
      rgba(201, 169, 110, 0.035) 1px,
      transparent 1px,
      transparent 109px
    );
}

/* Soft mask — radial vignette + vertical fade for readability */
.fx-bg-keylines-parallax::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(
      1200px 700px at 50% 35%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.08) 70%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.02) 35%,
      rgba(0, 0, 0, 0.05)
    );
  opacity: 0.4;
}

.dark .fx-bg-keylines-parallax::after {
  background:
    radial-gradient(
      1200px 700px at 50% 35%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.35) 70%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.15) 35%,
      rgba(0, 0, 0, 0.35)
    );
  opacity: 0.55;
}

/* Drift keyframes — vertical background-position shift (GPU-friendly) */
@keyframes fxKpDrift1 {
  from { background-position: 0 0; }
  to   { background-position: 0 1200px; }
}

@keyframes fxKpDrift2 {
  from { background-position: 0 0; }
  to   { background-position: 0 900px; }
}

@keyframes fxKpDrift3 {
  from { background-position: 0 0; }
  to   { background-position: 0 600px; }
}

/* Accessibility: respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .fx-bg-keylines-parallax .fx-kp-layer {
    animation: none !important;
  }
}
`;

export function DecorKeylinesParallaxFlow() {
  return (
    <>
      {/* Inject scoped styles — self-contained, no globals.css modification */}
      <style dangerouslySetInnerHTML={{ __html: KEYLINES_STYLES }} />

      {/* BG / FX_KeylinesParallaxFlow_Dark */}
      <div
        className="fx-bg-keylines-parallax"
        aria-hidden="true"
        data-name="BG / FX_KeylinesParallaxFlow_Dark"
        data-locked="true"
        data-export="false"
      >
        {/* FX / Keylines / L1 — primary fine lines, fastest drift */}
        <div
          className="fx-kp-layer fx-kp-l1"
          data-name="FX / Keylines / L1"
        />

        {/* FX / Keylines / L2 — secondary lines, medium drift */}
        <div
          className="fx-kp-layer fx-kp-l2"
          data-name="FX / Keylines / L2"
        />

        {/* FX / Keylines / L3 — accent tint lines, slowest drift */}
        <div
          className="fx-kp-layer fx-kp-l3"
          data-name="FX / Keylines / L3"
        />

        {/* FX / Mask — soft vignette rendered via ::after pseudo-element */}
      </div>
    </>
  );
}