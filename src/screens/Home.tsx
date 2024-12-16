import React from "react";
import styles from "./Home.module.css";
import { TechnologiesCard } from "@/components/technologies/TechnologiesCard";
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const principalTitle = "Tecnologías principales";
const principalTechs = [
  "HTML",
  "CSS",
  "Javascript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PosgreSQL",
  "MongoDB",
];

const secondaryTitle = "Tecnologías ocasionales";
const secondaryTechs = [
  "React Native",
  "Angular",
  "Tailwind",
  "Bootstrap",
  "MySQL",
];

export const HomePage = () => {
  return (
    <div id="Home" className={styles.container}>
      <div className={styles.sectionContainer}>
        <section>
          <p>
            <b>Bienvenidos</b> a mi página web!
            <br />
            Soy un <b>programador front-end</b> <br />
            con un gran apetito por construir increibles <b>
              aplicaciones web
            </b>{" "}
            y <b>mobile</b> que ayuden a las personas y sus negocios a{" "}
            <b>crecer exponencialmente</b>. <br />
            Busco también adentrarme cada vez más en tecnologías <b>back-end</b>
            .
            <br />
            Colabora conmigo y <br />
            <b>alcancemos juntos éxito!</b>
          </p>
        </section>
        <aside>
          <h1>DESARROLLADOR WEB</h1>
          <p>de la Fuente, Lucas</p>

          <Image
            src="/profile/profile-photo.jpg"
            alt="profile-photo"
            width={130}
            height={130}
            className={styles.profileImage}
          />

          <div className={styles.socialWebs}>
            <Link href="https://github.com/Lucano17" target="_blank">
              <IoLogoGithub />
            </Link>
            <Link
              href="/mailRedirect"
              target="_blank"
            >
              <BiLogoGmail />
            </Link>
          </div>
        </aside>
      </div>

      <div className={styles.technologies}>
        <TechnologiesCard title={principalTitle} techs={principalTechs} />
        <TechnologiesCard title={secondaryTitle} techs={secondaryTechs} />
      </div>
    </div>
  );
};
