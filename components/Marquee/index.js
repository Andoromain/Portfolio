import React, { useState } from "react";

// Scrolling band of technologies. It moves only when the visitor's system
// allows motion, and it can always be paused (WCAG 2.2.2).
const Marquee = ({ items, label }) => {
  const [paused, setPaused] = useState(false);

  const list = (copy) => (
    <ul
      className={`flex shrink-0 items-center ${copy ? "marquee-copy" : ""}`}
      aria-hidden={copy ? "true" : undefined}
    >
      {items.map((item) => (
        <li
          key={item}
          className="display flex items-center whitespace-nowrap text-2xl tablet:text-4xl"
        >
          <span className="px-5 tablet:px-8">{item}</span>
          <span aria-hidden="true" className="text-xl tablet:text-2xl">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label={label}
      className={`relative -mx-4 border-y-2 border-fg bg-accent text-on-accent tablet:-mx-6 laptop:-mx-10 ${
        paused ? "marquee-paused" : ""
      }`}
    >
      <div className="overflow-hidden py-4 pr-14">
        <div className="marquee-track">
          {list(false)}
          {list(true)}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-label={paused ? "Reprendre le défilement" : "Mettre en pause le défilement"}
        className="absolute inset-y-0 right-0 flex w-12 items-center justify-center border-l-2 border-fg bg-accent transition-colors duration-150 ease-out hover:bg-fg hover:text-bg motion-reduce:hidden"
      >
        {paused ? (
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor" />
          </svg>
        )}
      </button>
    </section>
  );
};

export default Marquee;
