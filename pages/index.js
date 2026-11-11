import { useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Cursor from "../components/Cursor";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";

// Local Data
import data from "../data/portfolioAndo.json";

export default function Home() {
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const actions = useRef();

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
    stagger([
      textOne.current,
      textTwo.current,
      textThree.current,
      textFour.current,
      actions.current,
    ]);
  }, []);

  const sectionLabel =
    "text-sm font-medium uppercase tracking-[0.05em] text-slate-500 dark:text-slate-400";

  return (
    <div className={`relative ${data.showCursor ? "cursor-none" : ""}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{`${data.name} RAZAFINANDRASANA · Développeur Full Stack`}</title>
        <meta name="description" content={data.headerTaglineFour} />
      </Head>
      <div className="gradient-circle" aria-hidden="true"></div>
      <div className="gradient-circle-bottom" aria-hidden="true"></div>

      <div className="container">
        <Header />

        <main>
          <section aria-labelledby="hero-titre" className="pt-12 laptop:pt-24">
            <h1
              id="hero-titre"
              className="max-w-5xl break-words text-[1.75rem] font-medium mob:text-[2rem] leading-[1.1] tracking-[-0.02em] tablet:text-6xl laptopl:text-7xl"
            >
              <span ref={textOne} className="block">
                {data.headerTaglineOne}
              </span>
              <span ref={textTwo} className="block">
                {data.headerTaglineTwo}
              </span>
              <span
                ref={textThree}
                className="block text-slate-500 dark:text-slate-400"
              >
                {data.headerTaglineThree}
              </span>
            </h1>
            <p
              ref={textFour}
              className="muted mt-6 max-w-2xl text-lg leading-relaxed laptop:text-xl"
            >
              {data.headerTaglineFour}
            </p>
            <div ref={actions} className="mt-8">
              <div className="flex flex-wrap gap-3">
                <Button type="primary" href="#projets">
                  Voir mes projets
                </Button>
                {data.showResume && (
                  <Link href="/resume">
                    <a className="btn btn-outline">Consulter mon CV</a>
                  </Link>
                )}
              </div>
              <Socials className="mt-6" />
            </div>
          </section>

          <section
            id="projets"
            aria-labelledby="projets-titre"
            className="mt-24 laptop:mt-32"
          >
            <h2 id="projets-titre" className={sectionLabel}>
              Projets
            </h2>
            <p className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.01em] laptop:text-4xl">
              Une sélection de ce que j’ai construit, du projet client au jeu
              open source.
            </p>

            <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 tablet:grid-cols-2">
              {data.projects.map((project) => (
                <li key={project.id}>
                  <WorkCard project={project} />
                </li>
              ))}
            </ul>

            {data.otherProjects && data.otherProjects.length > 0 && (
              <div className="mt-20">
                <h3 className="text-xl font-medium">Projets plus anciens</h3>
                <ul className="mt-4 border-t border-slate-200 dark:border-slate-800">
                  {data.otherProjects.map((project) => (
                    <li
                      key={project.title}
                      className="border-b border-slate-200 dark:border-slate-800"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4 transition-colors duration-150 ease-out hover:text-slate-600 dark:hover:text-slate-300"
                      >
                        <span className="text-lg font-medium">
                          {project.title}
                          <span aria-hidden="true"> ↗</span>
                          <span className="sr-only">
                            {" "}
                            (s’ouvre dans un nouvel onglet)
                          </span>
                        </span>
                        <span className="muted text-base">
                          {project.description}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <section
            id="a-propos"
            aria-labelledby="a-propos-titre"
            className="mt-24 laptop:mt-40"
          >
            <h2 id="a-propos-titre" className={sectionLabel}>
              À propos
            </h2>
            <p className="mt-4 max-w-3xl text-2xl leading-[1.4] laptop:text-3xl">
              {data.aboutpara}
            </p>
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
