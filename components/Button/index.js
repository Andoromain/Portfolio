import React from "react";

// type: "primary" | "outline" | undefined (ghost).
// Pass `href` to render a real link (keyboard, middle-click and Cmd/Ctrl-click
// all work), or `onClick` to render a button.
const Button = ({ children, type, onClick, href, external, classes = "" }) => {
  const variant =
    type === "primary"
      ? "btn-primary"
      : type === "outline"
      ? "btn-outline"
      : "btn-ghost";
  const className = `btn ${variant} ${classes}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className={className}>
      {children}
    </button>
  );
};

export default Button;
