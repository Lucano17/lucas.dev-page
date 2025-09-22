import React from "react";
import { EducationGrid } from "@/components/education/EducationGrid";
import { education } from "@/seed/seed";
import styles from "./Education.module.css";

export const Education = () => {
  return (
    <div id="Education" className={styles.container}>
      <h2>Educación</h2>
      <div className={styles.educationGrid}>
        <EducationGrid education={education.careers} />
      </div>
    </div>
  );
};
