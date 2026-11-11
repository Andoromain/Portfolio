import React from "react";
import Socials from "../Socials";
import Button from "../Button";
import data from "../../data/portfolioAndo.json";

const Footer = () => {
  const phoneHref = `tel:${data.phone.replace(/\s/g, "")}`;

  return (
    <footer className="mt-24 laptop:mt-40">
      <section id="contact" aria-labelledby="contact-titre">
        <h2
          id="contact-titre"
          className="text-sm font-medium uppercase tracking-[0.05em] text-slate-500 dark:text-slate-400"
        >
          Contact
        </h2>
        <p className="mt-4 text-4xl font-medium leading-[1.1] tracking-[-0.02em] tablet:text-6xl laptopl:text-7xl">
          Travaillons ensemble.
        </p>
        <p className="muted mt-6 max-w-xl text-lg leading-relaxed">
          Un projet web ou mobile, une mission ou une simple question ?
          Écrivez-moi ou appelez-moi.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button type="primary" href={`mailto:${data.email}`}>
            Écrire un e-mail
          </Button>
          <Button type="outline" href={phoneHref}>
            {data.phone}
          </Button>
        </div>
        <Socials className="mt-8" />
      </section>

      <p className="mt-16 border-t border-slate-200 py-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} {data.name} RAZAFINANDRASANA
      </p>
    </footer>
  );
};

export default Footer;
