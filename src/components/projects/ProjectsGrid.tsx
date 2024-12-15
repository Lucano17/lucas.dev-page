import React from 'react'
import styles from "./ProjectsGrid.module.css"
import { ProjectCard } from './ProjectCard'
import { Projects } from '@/seed/seed'


export const ProjectsGrid = () => {
    
  return (
    <div className={styles.container}>
        <ProjectCard />
        </div>
  )
}
