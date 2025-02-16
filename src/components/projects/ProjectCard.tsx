import styles from "./ProjectCard.module.css";
import { Project } from "@/interfaces/projects.interface";
import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { techIcons } from "../ui/Icons";

interface Props {
  project?: Project;
}

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
      <Link href={`/project/${project?.id}`}>
        <h3 className={styles.projectTitle}>{project?.title}</h3>

        <div className={styles.imagesContainer}>
          {project?.images && project.images.length > 0 ? (
            project.images.map((image) => (
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
      </Link>
    </div>
  );
};
