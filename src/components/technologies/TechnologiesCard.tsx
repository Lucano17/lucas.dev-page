import React from 'react'
import { Techs } from "@/interfaces/projects.interface";
import { techIcons } from '@/components/ui/Icons';
import styles from "./Technologies.module.css"

interface Props {
  techsUsed: Techs[];
  title: string
}

export const TechnologiesCard = ({techsUsed, title}: Props) => {
  return (
    <div className={styles.container}>
        <h2>{title}</h2>
        <ul>

        {techsUsed.map((tech)=>(
            <li key={tech.name}>
              <p className={styles.techIcon}>{techIcons[tech.name || ""] || null}</p>
              <h3 className={styles.techName}>{tech.name}</h3>
              </li>
        ))}
        </ul>
    </div>
  )
}
