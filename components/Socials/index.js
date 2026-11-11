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
              className="text-link inline-block py-1 text-base"
              {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            >
              {social.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
