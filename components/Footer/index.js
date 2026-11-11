import React from "react";
import Socials from "../Socials";
import Button from "../Button";
import data from "../../data/portfolioAndo.json";

const Footer = () => {
  const phoneHref = `tel:${data.phone.replace(/\s/g, "")}`;

  return (
    <footer className="mt-24 laptop:mt-36">
      <section
        id="contact"
        aria-labelledby="contact-titre"
        className="border-t-2 border-fg pt-4"
      >
        <p className="label muted" aria-hidden="true">
          04 —
        </p>
        <h2 id="contact-titre" className="sr-only">
          Contact
        </h2>
        <p className="display mt-3 text-[clamp(1.75rem,9.5vw,9.5rem)] leading-[0.88]">
          Travaillons
          <br />
          <span className="highlight">ensemble.</span>
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 laptop:grid-cols-12">
          <div className="laptop:col-span-7">
            <p className="label muted">Écrivez-moi</p>
            <a
              href={`mailto:${data.email}`}
              className="display mt-2 inline-block break-all text-[clamp(1.5rem,5.5vw,3.75rem)] normal-case leading-tight underline decoration-accent decoration-4 underline-offset-8 transition-colors duration-150 ease-out hover:bg-accent hover:text-on-accent"
            >
              {data.email}
            </a>
          </div>
          <div className="flex flex-col items-start gap-6 laptop:col-span-5 laptop:items-end">
            <Button type="outline" href={phoneHref}>
              <span aria-hidden="true">☎</span> {data.phone}
            </Button>
            <Socials />
          </div>
        </div>
      </section>

      <div className="label muted mt-20 flex flex-col gap-2 border-t-2 border-fg py-6 tablet:flex-row tablet:items-center tablet:justify-between">
        <p>
          © {new Date().getFullYear()} {data.name} RAZAFINANDRASANA
        </p>
        <p>Conçu et développé à Antananarivo</p>
        <a href="#haut" className="text-link self-start tablet:self-auto">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
