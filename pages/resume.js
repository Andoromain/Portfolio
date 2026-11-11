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

const Block = ({ id, number, title, children }) => (
  <section aria-labelledby={id} className="mt-16 border-t-2 border-fg pt-4">
    <div className="grid grid-cols-1 gap-6 laptop:grid-cols-12 laptop:gap-10">
      <div className="laptop:col-span-4">
        <p className="label muted" aria-hidden="true">
          {number} —
        </p>
        <h2 id={id} className="display mt-2 break-words text-[clamp(1.75rem,9vw,3rem)] leading-[0.95]">
          {title}
        </h2>
      </div>
      <div className="laptop:col-span-8">{children}</div>
    </div>
  </section>
);

const SkillGroup = ({ title, items }) =>
  items && items.length > 0 ? (
    <div className="border-t border-fg/20 py-5 first:border-t-0 first:pt-0">
      <h3 className="label muted">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="label whitespace-nowrap border border-fg/40 px-2 py-1 text-[0.8125rem]"
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

  return (
    <div id="haut" className={data.showCursor ? "cursor-none" : ""}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{`CV · ${name} RAZAFINANDRASANA`}</title>
      </Head>

      <div className="container">
        <Header />

        <main className="pt-6">
          <div className="label muted flex items-baseline justify-between gap-4">
            <span aria-hidden="true">CV — Curriculum vitae</span>
            <span>{new Date().getFullYear()}</span>
          </div>

          <h1 className="display mt-6 break-words text-[clamp(2.25rem,10vw,8rem)] leading-[0.88] tracking-[-0.03em]">
            {name}
            <span className="block text-[0.45em] leading-tight tracking-[-0.01em]">
              Razafinandrasana
            </span>
          </h1>
          <p className="display highlight mt-6 inline-block text-2xl tablet:text-3xl">
            Développeur Full Stack
          </p>
          <p className="mt-8 max-w-3xl text-xl leading-[1.45]">
            {resume.description}
          </p>
          <Socials className="mt-6" />

          <Block id="cv-experience" number="01" title="Expérience">
            {resume.experiences.map(({ id, dates, type, position, bullets }) => (
              <ProjectResume
                key={id}
                dates={dates}
                type={type}
                position={position}
                bullets={bullets}
              />
            ))}
          </Block>

          <Block id="cv-formation" number="02" title="Formation">
            <p className="label muted">{resume.education.universityDate}</p>
            <h3 className="mt-2 text-2xl font-semibold leading-snug">
              {resume.education.universityName}
            </h3>
            <p className="muted mt-2 text-lg leading-relaxed">
              {resume.education.universityPara}
            </p>
          </Block>

          <Block id="cv-competences" number="03" title="Compétences">
            <SkillGroup title="Langages" items={resume.languages} />
            <SkillGroup title="Frameworks" items={resume.frameworks} />
            <SkillGroup title="Outils" items={resume.others} />
          </Block>

          <p className="mt-16">
            <Link href="/#projets">
              <a className="btn btn-primary">
                Voir mes projets <span aria-hidden="true">→</span>
              </a>
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
