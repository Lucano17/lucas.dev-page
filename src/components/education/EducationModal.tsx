import { useUIStore } from "@/store/ui-store";
import React from "react";
import styles from "./EducationModal.module.css";
import { Education } from "@/interfaces/education.interface";

interface Props {
  education: Education;
}

export const EducationModal = ({ education }: Props) => {
  const isEducationModalOpen = useUIStore(
    (state) => state.isEducationModalOpen
  );
  const closeEducationModal = useUIStore((state) => state.closeEducationModal);

  const quarterNames: Record<string, string> = {
    firstQ: "Primer cuatrimestre",
    secondQ: "Segundo cuatrimestre",
    thirdQ: "Tercer cuatrimestre",
    fourthQ: "Cuarto cuatrimestre",
  };

  return (
    <div>
      {isEducationModalOpen && <div className={styles.blackBackground}></div>}
      {isEducationModalOpen && (
        <div
          className={styles.blurBackground}
          onClick={closeEducationModal}
        ></div>
      )}
      {isEducationModalOpen && (
        <div className={styles.dialogContainer}>
          <h2 className={styles.careerTitle}>{education.careerName}</h2>
          <p>Plan de estudio:</p>
          {Object.entries(education.planEstudio).map(
            ([quarter, subjects]: [string, string[]]) => (
              <div key={quarter}>
                <h4>{quarterNames[quarter] || quarter}</h4>
                <ul>
                  {subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              </div>
            )
          )}
          <a
          href="education/tup.pdf"
          download="utn-tec.prog.pdf"
          className={styles.downloadPDF}>
            Descargar
          </a>
          <button
            onClick={closeEducationModal}
          >
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};
