import { useEffect, useRef } from "react";

/**
 * Adds `.is-in` to the element when it enters the viewport.
 * Pair with the `.reveal` utility for a smooth scroll-in animation.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (el.classList.contains("is-in")) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08, ...options },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options]);
  return ref;
}

/**
 * Reveal helper for a group of children — staggers them with `.reveal-delay-*`.
 * Returns a ref to attach to the container; auto-adds `.is-in` to direct
 * `.reveal` children when the container scrolls into view.
 */
export function useRevealGroup<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".reveal")
              .forEach((child) => child.classList.add("is-in"));
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}