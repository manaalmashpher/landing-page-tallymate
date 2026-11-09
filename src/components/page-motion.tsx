"use client";

import { useEffect } from "react";

/** Progressive enhancement: server-rendered content stays visible without JS. */
export function PageMotion() {
  useEffect(() => {
    const root = document.getElementById("main");
    if (!root || !window.IntersectionObserver) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const revealed = new Set<HTMLElement>();
    let observer: IntersectionObserver | undefined;

    function show(target: HTMLElement) {
      revealed.add(target);
      target.dataset.motion = "visible";
      observer?.unobserve(target);
    }

    function configure() {
      observer?.disconnect();
      targets.forEach(target => target.removeAttribute("data-motion"));
      if (preference.matches) return;

      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) show(entry.target as HTMLElement);
        });
      }, { rootMargin: "0px 0px -32px 0px", threshold: 0 });

      targets.forEach(target => {
        if (revealed.has(target)) return;
        // Do not conceal content already above the viewport or containing focus.
        if (target.getBoundingClientRect().bottom <= 0 || target.contains(document.activeElement)) {
          revealed.add(target);
          return;
        }
        target.dataset.motion = "pending";
        observer?.observe(target);
      });
    }

    function revealFocused(event: FocusEvent) {
      targets.forEach(target => {
        if (event.target instanceof Node && target.contains(event.target)) show(target);
      });
    }

    configure();
    preference.addEventListener("change", configure);
    root.addEventListener("focusin", revealFocused);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", configure);
      root.removeEventListener("focusin", revealFocused);
      targets.forEach(target => target.removeAttribute("data-motion"));
    };
  }, []);

  return null;
}
