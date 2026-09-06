import React from "react";
import { experience } from "@/seed/seed";
import styles from "./Experience.module.css";
import { TimeLine } from "@/components/experience/TimeLine";

const myExperience = experience.experience;

export const Experience = () => {
  return (
    <div id="Experience" className={styles.container}>
      <h2 className={styles.title}>Experiencia</h2>
      <TimeLine experiences={myExperience}/>
    </div>
  );
};
