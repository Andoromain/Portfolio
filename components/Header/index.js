import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// Local Data
import data from "../../data/portfolioAndo.json";

const SunIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

const MenuIcon = ({ open }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    aria-hidden="true"
  >
    {open ? (
      <path d="M6 6l12 12M18 6L6 18" />
    ) : (
      <path d="M4 7h16M4 12h16M4 17h16" />
    )}
  </svg>
);

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Keep the slot's size before mount so the header never shifts.
  if (!mounted || !data.darkMode) return <span className="h-11 w-11" />;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Passer au thème clair" : "Passer au thème sombre"}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

const Header = () => {
  const { name, showResume } = data;

  const links = [
    { href: "/#projets", label: "Projets" },
    { href: "/#a-propos", label: "À propos" },
    ...(showResume ? [{ href: "/resume", label: "CV", next: true }] : []),
    { href: "/#contact", label: "Contact" },
  ];

  const renderLink = (link, className, onClick) =>
    link.next ? (
      <Link href={link.href}>
        <a className={className} onClick={onClick}>
          {link.label}
        </a>
      </Link>
    ) : (
      <a href={link.href} className={className} onClick={onClick}>
        {link.label}
      </a>
    );

  return (
    <header className="sticky top-0 z-20 -mx-4 bg-white/85 px-4 backdrop-blur dark:bg-black/85 tablet:-mx-6 tablet:px-6 laptop:-mx-8 laptop:px-8">
      <nav
        aria-label="Navigation principale"
        className="flex h-16 items-center justify-between gap-4"
      >
        <Link href="/">
          <a className="rounded-sm text-lg font-medium">{name}.</a>
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 tablet:flex">
            {links.map((link) => (
              <li key={link.href}>
                {renderLink(
                  link,
                  "inline-flex min-h-[2.75rem] items-center rounded-full px-4 text-base transition-colors duration-150 ease-out hover:bg-slate-100 dark:hover:bg-slate-900"
                )}
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <Popover className="relative tablet:hidden">
            {({ open, close }) => (
              <>
                <Popover.Button
                  className="icon-btn"
                  aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                >
                  <MenuIcon open={open} />
                </Popover.Button>
                <Popover.Panel className="absolute right-0 top-full z-30 mt-2 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <ul>
                    {links.map((link) => (
                      <li key={link.href}>
                        {renderLink(
                          link,
                          "flex min-h-[2.75rem] items-center rounded-xl px-4 text-base hover:bg-slate-100 dark:hover:bg-slate-800",
                          () => close()
                        )}
                      </li>
                    ))}
                  </ul>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>
      </nav>
    </header>
  );
};

export default Header;
