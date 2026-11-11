import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const bulletsLocal = Array.isArray(bullets)
    ? bullets
    : (bullets || "").split(",").filter((bullet) => bullet.trim());

  return (
    <div className="mt-6 grid gap-2 tablet:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] tablet:gap-8">
      <div>
        <p className="text-base tabular-nums">{dates}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{type}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium leading-snug">{position}</h3>
        {bulletsLocal.length > 0 && (
          <ul className="muted mt-2 list-disc space-y-1.5 pl-5 text-base leading-relaxed">
            {bulletsLocal.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
