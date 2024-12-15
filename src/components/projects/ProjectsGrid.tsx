import React from 'react'
import styles from "./ProjectsGrid.module.css"
import { ProjectCard } from './ProjectCard'


export const ProjectsGrid = () => {
  return (
    <div className={styles.container}>
        <ProjectCard />
        </div>
  )
}
