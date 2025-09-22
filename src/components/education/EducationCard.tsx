import React from "react";
import { Education } from "@/interfaces/education.interface";
import styles from "./EducationGrid.module.css";

interface Props {
  education: Education;
}

export const EducationCard = ({ education }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {education.institutionLogo}
        <h4>{education.institutionName}</h4>
        <h2>{education.careerName}</h2>
        <p>{education.grade}</p>
      </div>
      <div className={styles.dataContainer}>
        {education.grade}
      </div>
    </div>
  );
};
