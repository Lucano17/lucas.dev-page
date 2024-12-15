import React from 'react'
import styles from "./Technologies.module.css"

interface Props {
    title: String,
    techs: string[],
}

export const TechnologiesCard = ({title, techs}: Props) => {
  return (
    <div className={styles.container}>
        <h1>{title}</h1>
        <ul>

        {techs.map((tech)=>(
            <li key={tech}>{tech}</li>
        ))}
        </ul>
    </div>
  )
}
