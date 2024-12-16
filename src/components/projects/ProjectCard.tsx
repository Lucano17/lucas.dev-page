import React, { JSX } from "react";
import styles from "./ProjectCard.module.css";
import { Project } from "@/interfaces/projects.interface";
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
      <h3>{project?.title}</h3>

      {/* Renderizar imágenes */}
      <div className={styles.imagesContainer}>
        {project?.images && project.images.length > 0 ? (
          project.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))
        ) : (
          <p>No hay imágenes disponibles</p>
        )}
      </div>

      {/* Renderizar tecnologías */}
      <div className={styles.techsContainer}>
        {project?.techsUsed && project.techsUsed.length > 0 ? (
          project.techsUsed.map((tech, index) => (
            <div key={index} className={styles.tech} title={tech.name}>
              {techIcons[tech.name || ""] || null}
            </div>
          ))
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
