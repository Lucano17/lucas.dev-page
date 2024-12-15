import React from "react";
import styles from "./ProjectsGrid.module.css";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/interfaces/projects.interface";

interface Props {
  projects?: Project[];
}

export const ProjectsGrid = ({ projects }: Props) => {
  return (
    <div className={styles.container}>
      {projects?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
