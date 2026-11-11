import React from "react";

// Editorial section header: a heavy rule, a mono number and a display title.
const SectionHeading = ({ id, number, title, aside, as: Tag = "h2" }) => (
  <div className="border-t-2 border-fg pt-4">
    <div className="flex items-baseline justify-between gap-4">
      <span className="label muted" aria-hidden="true">
        {number} —
      </span>
      {aside && <span className="label muted text-right">{aside}</span>}
    </div>
    <Tag
      id={id}
      className="display mt-3 text-[clamp(2.5rem,9vw,7rem)] leading-[0.9]"
    >
      {title}
    </Tag>
  </div>
);

export default SectionHeading;
