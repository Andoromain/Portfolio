import { useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Cursor from "../components/Cursor";
import Marquee from "../components/Marquee";
import SectionHeading from "../components/SectionHeading";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";

// Local Data
import data from "../data/portfolioAndo.json";

const pad = (n) => String(n).padStart(2, "0");

export default function Home() {
  const lineOne = useRef();
  const lineTwo = useRef();
  const role = useRef();
  const intro = useRef();

  useEffect(() => {
    // Your JavaScript code
    (function () {
      window.sib = {
        equeue: [],
        client_key: "vh5j3ooge12oidmnf1e2cnrm"
      };

      /* OPTIONAL: email for identify request*/
      // window.sib.email_id = 'example@domain.com';

      window.sendinblue = {};
      for (var j = ['track', 'identify', 'trackLink', 'page'], i = 0; i < j.length; i++) {
        (function (k) {
          window.sendinblue[k] = function () {
            var arg = Array.prototype.slice.call(arguments);
            (window.sib[k] || function () {
              var t = {};
              t[k] = arg;
              window.sib.equeue.push(t);
            })(arg[0], arg[1], arg[2]);
          };
        })(j[i]);
      }

      var n = document.createElement("script"),
        i = document.getElementsByTagName("script")[0];
      n.type = "text/javascript", n.id = "sendinblue-js",
        n.async = true, n.src = "https://sibautomation.com/sa.js?key=" + window.sib.client_key,
        i.parentNode.insertBefore(n, i), window.sendinblue.page();
    })();
  }, []); 
  
  useIsomorphicLayoutEffect(() => {
    stagger([lineOne.current, lineTwo.current, role.current, intro.current]);
  }, []);

  const featured = data.projects.filter((project) => project.featured);
  const projects = data.projects.filter((project) => !project.featured);
  const year = new Date().getFullYear();

  return (
    <div id="haut" className={data.showCursor ? "cursor-none" : ""}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{`${data.name} RAZAFINANDRASANA · Développeur Full Stack`}</title>
        <meta name="description" content={data.intro} />
      </Head>

      <div className="container">
        <Header />

        <main>
          {/* 01 — Hero */}
          <section aria-labelledby="hero-titre" className="pb-12 pt-6 laptop:pb-16">
            <div className="label muted flex items-baseline justify-between gap-4">
              <span aria-hidden="true">01 — Portfolio</span>
              <span className="hidden tablet:inline">Antananarivo, Madagascar</span>
              <span>{year}</span>
            </div>

            <h1
              id="hero-titre"
              className="display mt-6 text-[clamp(2.75rem,15.5vw,16rem)] leading-[0.82] tracking-[-0.035em]"
            >
              <span ref={lineOne} className="block">
                Ando
              </span>
              <span ref={lineTwo} className="block">
                Romain
                <span className="highlight ml-[0.04em] text-[0.6em] align-baseline">
                  .
                </span>
              </span>
              <span className="sr-only"> RAZAFINANDRASANA</span>
            </h1>

            <div
              ref={role}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <p className="display highlight text-2xl tablet:text-4xl">
                Développeur Full Stack
              </p>
              <p className="label muted" aria-hidden="true">
                Razafinandrasana
              </p>
            </div>

            <div
              ref={intro}
              className="mt-12 grid grid-cols-1 gap-8 border-t border-fg/20 pt-8 laptop:grid-cols-12 laptop:gap-10"
            >
              <p className="text-xl leading-[1.45] laptop:col-span-7 laptop:text-2xl">
                {data.intro}
              </p>
              <div className="flex flex-col items-start gap-6 laptop:col-span-5 laptop:items-end">
                <div className="flex flex-wrap gap-3 laptop:justify-end">
                  <Button type="primary" href="#projets">
                    Voir mes projets <span aria-hidden="true">↓</span>
                  </Button>
                  {data.showResume && (
                    <Link href="/resume">
                      <a className="btn btn-outline">Mon CV</a>
                    </Link>
                  )}
                </div>
                <Socials className="laptop:justify-end" />
              </div>
            </div>
          </section>

          <Marquee items={data.stack} label="Technologies que j’utilise" />

          {/* 02 — Projets */}
          <section
            id="projets"
            aria-labelledby="projets-titre"
            className="mt-20 laptop:mt-28"
          >
            <SectionHeading
              id="projets-titre"
              number="02"
              title="Projets"
              aside={`${data.projects.length} sélectionnés`}
            />

            <ul className="mt-10 space-y-16 laptop:mt-14 laptop:space-y-24">
              {featured.map((project, index) => (
                <li key={project.id}>
                  <WorkCard project={project} number={pad(index + 1)} featured />
                </li>
              ))}
            </ul>

            <ul className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 tablet:grid-cols-2 laptop:mt-20">
              {projects.map((project, index) => (
                <li key={project.id}>
                  <WorkCard project={project} number={pad(featured.length + index + 1)} />
                </li>
              ))}
            </ul>

            {data.otherProjects && data.otherProjects.length > 0 && (
              <div className="mt-20">
                <h3 className="label muted">Archives</h3>
                <ul className="mt-4 border-t-2 border-fg">
                  {data.otherProjects.map((project, index) => (
                    <li key={project.title} className="border-b border-fg/20">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-1 py-4 transition-colors duration-150 ease-out hover:bg-accent hover:text-on-accent tablet:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1fr)_auto]"
                      >
                        <span aria-hidden="true" className="label muted group-hover:text-current">
                          {pad(data.projects.length + index + 1)}
                        </span>
                        <span className="text-lg font-semibold">
                          {project.title}
                        </span>
                        <span className="muted col-start-2 text-base group-hover:text-current tablet:col-start-auto">
                          {project.description}
                        </span>
                        <span aria-hidden="true" className="col-start-3 row-start-1 tablet:col-start-auto tablet:row-start-auto">
                          ↗
                        </span>
                        <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* 03 — À propos */}
          <section
            id="a-propos"
            aria-labelledby="a-propos-titre"
            className="mt-24 laptop:mt-36"
          >
            <SectionHeading id="a-propos-titre" number="03" title="À propos" />
            <div className="mt-10 grid grid-cols-1 gap-12 laptop:grid-cols-12 laptop:gap-10">
              <div className="laptop:col-span-7">
                <p className="text-3xl font-semibold leading-[1.2] tracking-[-0.01em] tablet:text-4xl laptop:text-5xl">
                  {data.aboutStatement}
                </p>
                <p className="muted mt-6 max-w-2xl text-lg leading-relaxed">
                  {data.aboutpara}
                </p>
              </div>
              <dl className="laptop:col-span-5">
                {data.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-t border-fg/20 py-5 last:border-b"
                  >
                    <dt className="label muted pt-1">{fact.label}</dt>
                    <dd>
                      <p className="text-lg font-semibold leading-snug">
                        {fact.value}
                      </p>
                      <p className="label muted mt-1">{fact.detail}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </main>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5 z-30">
            <Link href="/edit">
              <a className="btn btn-primary">Modifier les données</a>
            </Link>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
