"use client";

import { useEffect } from "react";

/** Progressive enhancement: server-rendered content stays visible without JS. */
export function PageMotion() {
  useEffect(() => {
    const root = document.getElementById("main");
    if (!root || !window.IntersectionObserver) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const sections = new Map<Element, HTMLElement[]>();
    targets.forEach(target => {
      const section = target.closest("section") ?? target;
      const members = sections.get(section) ?? [];
      members.push(target);
      sections.set(section, members);
    });
    let observer: IntersectionObserver | undefined;
    let sectionObserver: IntersectionObserver | undefined;

    function show(target: HTMLElement) {
      target.dataset.motion = "visible";
    }

    function configure() {
      observer?.disconnect();
      sectionObserver?.disconnect();
      targets.forEach(target => target.removeAttribute("data-motion"));
      if (preference.matches) return;

      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) show(target);
          else if (!target.contains(document.activeElement)) target.dataset.motion = "pending";
        });
      }, { rootMargin: "0px 0px -32px 0px", threshold: 0 });

      // Observe section boxes first. Measuring their skipped descendants at
      // startup would defeat content-visibility and render the entire page.
      sectionObserver = new IntersectionObserver(entries => {
        const measurements: { target: HTMLElement; keepVisible: boolean }[] = [];
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          sectionObserver?.unobserve(entry.target);
          (sections.get(entry.target) ?? []).forEach(target => {
            measurements.push({
              target,
              keepVisible: target.contains(document.activeElement) || target.getBoundingClientRect().bottom <= 0,
            });
          });
        });
        // Complete every geometry read before changing any animation styles.
        measurements.forEach(({ target, keepVisible }) => {
          if (keepVisible) {
            observer?.observe(target);
          } else {
            target.dataset.motion = "pending";
            observer?.observe(target);
          }
        });
      }, { rootMargin: "300px 0px 300px 0px", threshold: 0 });
      sections.forEach((_, section) => sectionObserver?.observe(section));
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
      sectionObserver?.disconnect();
      preference.removeEventListener("change", configure);
      root.removeEventListener("focusin", revealFocused);
      targets.forEach(target => target.removeAttribute("data-motion"));
    };
  }, []);

  return null;
}
