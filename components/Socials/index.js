import React from "react";
import yourData from "../../data/portfolioAndo.json";

const Socials = ({ className = "" }) => {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {yourData.socials.map((social) => {
        const isMail = social.link.startsWith("mailto:");
        return (
          <li key={social.id}>
            <a
              href={social.link}
              className="label inline-flex min-h-[1.5rem] items-center gap-1 py-1 underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-150 ease-out hover:bg-accent hover:text-on-accent"
              {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            >
              {social.title}
              <span aria-hidden="true">{isMail ? "→" : "↗"}</span>
              {!isMail && (
                <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
