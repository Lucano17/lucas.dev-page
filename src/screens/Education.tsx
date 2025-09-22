import React from "react";
import { EducationGrid } from "@/components/education/EducationGrid";
import { education } from "@/seed/seed";
import styles from "./Education.module.css";

const careers = education.careers;

export const Education = () => {
  return (
    <div id="Education" className={styles.container}>
      <div className={styles.projectsGrid}>
        <EducationGrid education={careers} />
      </div>
    </div>
  );
};
