import React from "react";
import styles from "./ProjectCard.module.css";
import myProjects from "@/api/projects/my-projects.json";
import { Project } from "@/interfaces/projects.interface";

interface Props {
  project?: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className={styles.container}>
      <h3>Título</h3>
      <div className={styles.imagesContainer}>IMAGEN</div>
      <div className={styles.techsContainer}>Technologies</div>
    </div>
  );
};
