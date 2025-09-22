"use client";

import React from "react";
import { Education } from "@/interfaces/education.interface";
import styles from "./EducationCard.module.css";
import Image from "next/image";
import { useUIStore } from "@/store/ui-store";
import { EducationModal } from "./EducationModal";

interface Props {
  education: Education;
}

export const EducationCard = ({ education }: Props) => {
  const openEducationModal = useUIStore((state) => state.openEducationModal);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.institutionHeadContainer}>
          <Image
            src={`/education/${education.institutionLogo}`}
            alt={""}
            width={20}
            height={20}
          />
          <h4>{education.institutionName}</h4>
        </div>
        <h3>{education.careerName}</h3>
      </div>
      <div className={styles.dataContainer}>
        <p><span>Grado: </span>{education.grade}</p>
        <p><span>Empezado el: </span>{education.startedAt}</p>
        <p><span>Años de carrera: </span>{education.years} años</p>
        <p><span>Horas cátedra: </span>{education.hours}hs</p>
      </div>

      <button className={styles.openDialogButton} onClick={openEducationModal}>
        Ver más detalles
      </button>
      <EducationModal education={education}/>
    </div>
  );
};
