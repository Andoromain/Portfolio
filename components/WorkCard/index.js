import React from "react";

const WorkCard = ({ project }) => {
  const { title, description, tags = [], imageSrc, imageAlt = "", url, status } =
    project;
  const isExternal = url && /^https?:/.test(url);

  return (
    <article className="group relative flex h-full flex-col">
      <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full rounded-2xl object-cover object-top outline outline-1 outline-black/10 [outline-offset:-1px] dark:outline-white/10"
        />
      </div>

      <p className="mt-5 text-sm font-medium uppercase tracking-[0.05em] text-slate-500 dark:text-slate-400">
        {status}
      </p>
      <h3 className="mt-1 text-2xl font-medium leading-tight tracking-[-0.01em]">
        {url ? (
          <a
            href={url}
            className="rounded-sm decoration-slate-400 underline-offset-4 hover:underline after:absolute after:inset-0 after:content-['']"
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {title}
            <span aria-hidden="true"> ↗</span>
            {isExternal && <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="muted mt-2 max-w-prose text-base leading-relaxed">
        {description}
      </p>

      {tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {tags.map((tag) => (
            <li
              key={tag}
              className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default WorkCard;
