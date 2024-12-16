import React, { JSX } from "react";
import styles from "./ProjectCard.module.css";
import { Project } from "@/interfaces/projects.interface";
import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiReactrouter,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiDocker,
  SiPrisma,
} from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

interface Props {
  project?: Project;
}

// Mapeo de nombres de tecnologías a íconos
const techIcons: Record<string, JSX.Element> = {
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <SiNodedotjs />,
  PosgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  "React Native": <SiReactrouter />,
  Angular: <SiAngular />,
  Tailwind: <SiTailwindcss />,
  Bootstrap: <SiBootstrap />,
  Docker: <SiDocker />,
  Prisma: <SiPrisma />,
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>

        {project?.webLink && (
          <Link href={`${project?.webLink}`} target="_blank">
            <FaExternalLinkAlt
              className={`${styles.linkItem} ${styles.webItem}`}
            />
          </Link>
        )}

        <Link href={`${project?.gitHubLink}`} target="_blank">
          <IoLogoGithub className={`${styles.linkItem} ${styles.gitItem}`} />
        </Link>
      </div>
      <h3>{project?.title}</h3>

      {/* Renderizar imágenes */}
      <div className={styles.imagesContainer}>
        {project?.images && project.images.length > 0 ? (
          project.images.map((image, index) => (
            <Image
              key={project.title}
              src={`/projects/${image}`}
              alt={project?.title || "Imagen del proyecto"}
              width={200}
              height={125}
            />
          ))
        ) : (
          <p>No hay imágenes disponibles</p>
        )}
      </div>
      <div className={styles.techsContainer}>
        {project?.techsUsed && project.techsUsed.length > 0
          ? project.techsUsed.map((tech, index) => (
              <div key={index} className={styles.tech} title={tech.name}>
                {techIcons[tech.name || ""] || null}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};
