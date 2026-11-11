import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const bulletsLocal = Array.isArray(bullets)
    ? bullets
    : (bullets || "").split(",").filter((bullet) => bullet.trim());

  return (
    <div>
      <p className="label muted">
        {dates} · {type}
      </p>
      <h3 className="mt-2 text-2xl font-semibold leading-snug">{position}</h3>
      {bulletsLocal.length > 0 && (
        <ul className="mt-4 border-t border-fg/20">
          {bulletsLocal.map((bullet, index) => (
            <li
              key={index}
              className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-2 border-b border-fg/20 py-3 text-lg leading-relaxed"
            >
              <span aria-hidden="true" className="label muted pt-1">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectResume;
