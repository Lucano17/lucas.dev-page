import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { Techs } from "@/interfaces/projects.interface";
import {
  cvIcon,
  gitHubIcon,
  gmailIcon,
  linkedInIcon,
} from "@/components/ui/Icons";
import { StackCard } from "@/components/stacks/StackCard";

const frontEndTitle = "Front-end Stack"
const frontEndTechs: Techs[] = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Zustand" },
  { name: "Redux" },
  
]

const backEndTitle = "Back-end Stack"
const backEndTechs: Techs[] = [
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "C#" },
  { name: ".Net" },
  { name: "MySQL" },
  { name: "PostgreSQL" },
  { name: "Prisma" },
  { name: "MongoDB" },
  { name: "Docker" },
]

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
          <h1>DESARROLLADOR FULL-STACK</h1>
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
              {gitHubIcon}
            </Link>
            <Link href="/mailRedirect" target="_blank">
              {gmailIcon}
            </Link>
            <Link
              href="https://www.linkedin.com/in/lucas-de-la-fuente-040b01188/"
              target="_blank"
            >
              {linkedInIcon}
            </Link>
            <a href="pdf/cv-esp.pdf" download="CV-Lucas.delaFuente-Esp.pdf">
              {cvIcon}
            </a>
          </div>
        </aside>
      </div>

      <div className={styles.stacks}>
        <StackCard title={frontEndTitle} techsUsed={frontEndTechs} />
        <StackCard title={backEndTitle} techsUsed={backEndTechs} />
      </div>
    </div>
  );
};
