import React from "react";
import styles from "./ProjectCard.module.css";
import { Project } from "@/interfaces/projects.interface";

interface Props {
  project?: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.container}>
      <h3>{project?.title}</h3>
      <div className={styles.imagesContainer}>{project?.images}</div>
      <div className={styles.techsContainer}>
        {project?.techsUsed &&
          project.techsUsed.length > 0 &&
          project.techsUsed.map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech.name}
            </span>
          ))}
      </div>
    </div>
  );
};
