import gsap from "gsap";

// Staggered entrance for the hero: each chunk fades in with 4px of blur and
// 12px of upward travel, 100ms apart. Under reduced motion, a plain fade.
export const stagger = (target) => {
  const elements = target.filter(Boolean);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    return gsap.fromTo(
      elements,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power1.out" }
    );
  }

  return gsap.fromTo(
    elements,
    { opacity: 0, y: 12, filter: "blur(4px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.3,
      stagger: 0.1,
      ease: "power1.out",
      clearProps: "filter,transform",
    }
  );
};
