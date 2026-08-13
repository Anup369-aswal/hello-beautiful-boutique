"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasFinePointer || prefersReducedMotion) return;

    const dot = dotRef.current;
    if (!dot) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const onEnterInteractive = () => dot.classList.add("is-active");
    const onLeaveInteractive = () => dot.classList.remove("is-active");

    window.addEventListener("pointermove", move);

    const interactiveEls = document.querySelectorAll("a, button, input, textarea, select");
    interactiveEls.forEach((el) => {
      el.addEventListener("pointerenter", onEnterInteractive);
      el.addEventListener("pointerleave", onLeaveInteractive);
    });

    dot.style.opacity = "1";

    return () => {
      window.removeEventListener("pointermove", move);
      interactiveEls.forEach((el) => {
        el.removeEventListener("pointerenter", onEnterInteractive);
        el.removeEventListener("pointerleave", onLeaveInteractive);
      });
    };
  }, []);

  return <div ref={dotRef} className="custom-cursor hidden opacity-0 lg:block" aria-hidden="true" />;
}
