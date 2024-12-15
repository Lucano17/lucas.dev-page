import React from 'react'
import styles from "./Projects.module.css"
import { ProjectsGrid } from '@/components/projects/ProjectsGrid'
import { projects } from "@/seed/seed";

const myProjects = projects.projects

export const Projects = () => {
  return (
    <div className={styles.container}>
      <h2>Mis proyectos</h2>
      <div className={styles.projectsGrid}>
          <ProjectsGrid projects={myProjects} />
      </div>
    </div>
  )
}
