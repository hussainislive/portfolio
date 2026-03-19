"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saveData = connection?.saveData ?? false;

    if (prefersReducedMotion || saveData) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.8,
      lerp: 0.11,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.82,
      touchMultiplier: 1,
      anchors: true
    });

    let rafId = 0;

    const stopRaf = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    const startRaf = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(raf);
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stopRaf();
        return;
      }

      startRaf();
    };

    startRaf();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stopRaf();
      document.removeEventListener("visibilitychange", handleVisibility);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
