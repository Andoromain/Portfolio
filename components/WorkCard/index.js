import React from "react";

const WorkCard = ({ project, number, featured = false }) => {
  const { title, description, tags = [], imageSrc, imageAlt = "", url, status } =
    project;
  const isExternal = url && /^https?:/.test(url);

  const image = (
    <div className="aspect-[16/10] overflow-hidden border-2 border-fg bg-fg/5">
      <img
        src={imageSrc}
        alt={imageAlt}
        loading={featured ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );

  const body = (
    <div className={featured ? "laptop:flex laptop:h-full laptop:flex-col" : ""}>
      <div className="label muted mt-4 flex items-baseline justify-between gap-4 laptop:mt-0">
        <span aria-hidden="true">{number}</span>
        <span>{status}</span>
      </div>
      <h3
        className={`display mt-3 leading-[0.95] ${
          featured
            ? "text-4xl tablet:text-6xl"
            : "text-3xl tablet:text-4xl"
        }`}
      >
        {url ? (
          <a
            href={url}
            className="transition-colors duration-150 ease-out [box-decoration-break:clone] group-hover:bg-accent group-hover:text-on-accent after:absolute after:inset-0 after:content-['']"
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {title}
            <span aria-hidden="true"> ↗</span>
            {isExternal && (
              <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
            )}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="muted mt-4 max-w-prose text-base leading-relaxed tablet:text-lg">
        {description}
      </p>
      {tags.length > 0 && (
        <ul
          className={`mt-5 flex flex-wrap gap-2 ${featured ? "laptop:mt-auto laptop:pt-6" : ""}`}
          aria-label="Technologies"
        >
          {tags.map((tag) => (
            <li
              key={tag}
              className="label whitespace-nowrap border border-fg/40 px-2 py-1 text-[0.8125rem]"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <article
      className={`group relative ${
        featured ? "laptop:grid laptop:grid-cols-12 laptop:gap-10" : ""
      }`}
    >
      <div className={featured ? "laptop:col-span-8" : ""}>{image}</div>
      <div className={featured ? "laptop:col-span-4" : ""}>{body}</div>
    </article>
  );
};

export default WorkCard;
