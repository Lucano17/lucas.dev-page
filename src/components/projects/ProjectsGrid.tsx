import React from "react";
import styles from "./ProjectsGrid.module.css";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/interfaces/projects.interface";

interface Props {
  projects?: Project[];
}

export const ProjectsGrid = ({ projects }: Props) => {
  const visibleProjects = projects
                                  ?.filter((project) => project.show)
                                  .sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
  return (
    <div className={styles.container}>
      {visibleProjects?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
