import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
// Data
import data from "../data/portfolioAndo.json";

const SkillGroup = ({ title, items }) =>
  items && items.length > 0 ? (
    <div>
      <h3 className="text-base font-medium">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  ) : null;

const Resume = () => {
  const router = useRouter();
  const { name, showResume, resume } = data;

  useEffect(() => {
    if (!showResume) {
      router.push("/");
    }
  }, [showResume, router]);

  const sectionTitle =
    "text-sm font-medium uppercase tracking-[0.05em] text-slate-500 dark:text-slate-400";

  return (
    <div className={data.showCursor ? "cursor-none" : ""}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{`CV · ${name} RAZAFINANDRASANA`}</title>
      </Head>

      <div className="container">
        <Header />

        <main className="mx-auto mt-10 max-w-4xl rounded-3xl bg-slate-50 p-6 tablet:p-12 laptop:p-16 dark:bg-slate-900/60">
          <h1 className="break-words text-[1.75rem] font-medium mob:text-[2rem] leading-[1.1] tracking-[-0.02em] tablet:text-5xl">
            {name} RAZAFINANDRASANA
          </h1>
          <p className="mt-4 text-xl leading-snug">{resume.tagline}</p>
          <p className="muted mt-3 max-w-2xl text-lg leading-relaxed">
            {resume.description}
          </p>
          <Socials className="mt-6" />

          <section aria-labelledby="cv-experience" className="mt-14">
            <h2 id="cv-experience" className={sectionTitle}>
              Expérience
            </h2>
            {resume.experiences.map(({ id, dates, type, position, bullets }) => (
              <ProjectResume
                key={id}
                dates={dates}
                type={type}
                position={position}
                bullets={bullets}
              />
            ))}
          </section>

          <section aria-labelledby="cv-formation" className="mt-14">
            <h2 id="cv-formation" className={sectionTitle}>
              Formation
            </h2>
            <div className="mt-6 grid gap-2 tablet:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] tablet:gap-8">
              <p className="text-base text-slate-500 tabular-nums dark:text-slate-400">
                {resume.education.universityDate}
              </p>
              <div>
                <h3 className="text-lg font-medium leading-snug">
                  {resume.education.universityName}
                </h3>
                <p className="muted mt-1 text-base leading-relaxed">
                  {resume.education.universityPara}
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="cv-competences" className="mt-14">
            <h2 id="cv-competences" className={sectionTitle}>
              Compétences
            </h2>
            <div className="mt-6 grid gap-8 tablet:grid-cols-3">
              <SkillGroup title="Langages" items={resume.languages} />
              <SkillGroup title="Frameworks" items={resume.frameworks} />
              <SkillGroup title="Outils" items={resume.others} />
            </div>
          </section>

          <p className="mt-14">
            <Link href="/#projets">
              <a className="text-link text-base">Voir mes projets</a>
            </Link>
          </p>
        </main>

        <Footer />
      </div>

      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6 z-30">
          <Link href="/edit">
            <a className="btn btn-primary">Modifier le CV</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Resume;
