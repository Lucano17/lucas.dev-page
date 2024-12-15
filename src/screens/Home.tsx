import React from "react";
import styles from "./Home.module.css";
import { TechnologiesCard } from "@/components/technologies/TechnologiesCard";
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";

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
    <div className={styles.container}>
      <div className={styles.sectionContainer}>
        <section>
          <p>
            <b>Bienvenidos a mi página web!</b>
            <br />
            Soy un <b>programador front-end</b> con un gran apetito <br />
            por construir increibles aplicaciones web y mobile que ayuden <br />
            a las personas y sus negocios a crecer exponencialmente. <br />
            Busco también adentrarme cada vez más en tecnologías <b>back-end</b>
            <br />
            Colabora conmigo y <b>alcancemos juntos éxito!</b>
          </p>
        </section>
        <aside>
          <h1>
            WEB DEVELOPER <br />
            <span>de la fuente, Lucas</span>
          </h1>
          <div className={styles.socialWebs}>
        <IoLogoGithub/>
        <BiLogoGmail/>
      </div>
        </aside>
      </div>

      
      <div className={styles.technologies}>
        <TechnologiesCard title={principalTitle} techs={principalTechs} />
        <TechnologiesCard title={secondaryTitle} techs={secondaryTechs}/>
      </div>
    </div>
  );
};
