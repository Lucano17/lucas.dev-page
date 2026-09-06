"use client"; // Asegúrate de incluir esto si estás en la App Router de Next.js

import React, { useState } from "react";
import styles from "./TimeLine.module.css";
import { Experience } from "@/interfaces/experience.interface";

type Props = {
  experiences: Experience[];
};

export const TimeLine = ({ experiences }: Props) => {
  // Guardamos el ID del trabajo que está abierto. Si es null, todos están cerrados.
  const [activeJobId, setActiveJobId] = useState<string | null>(null);

  // Corrección del sort: (a, b) => a.initDate - b.initDate
  const sortedExperiences = [...experiences].sort(
    (a, b) => new Date(a.initDate).getTime() - new Date(b.initDate).getTime(),
  );

  const toggleTasks = (id: string) => {
    // Si haces clic en el que ya está abierto, lo cierra (null). Si no, abre el nuevo.
    setActiveJobId((currentId) => (currentId === id ? null : id));
  };

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineAxis}>
        {sortedExperiences.map((job) => {
          const startDate = new Date(job.initDate).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "short",
          });

          const endDate = job.endDate
            ? new Date(job.endDate).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "short",
              })
            : "Actualidad";

          // Comprobamos si este trabajo en específico debe mostrar sus tareas
          const isOpen = activeJobId === job.id;

          return (
            <div key={job.id} className={styles.timelineItem}>
              <div className={styles.circle} />

              <div>
                <span className={styles.date}>
                  {startDate} — {endDate}
                </span>
                <h3 className={styles.position}>{job.position}</h3>
                <h4 className={styles.company}>{job.company}</h4>

                {/* Botón para desplegar/replegar */}
                <button
                  onClick={() => toggleTasks(job.id)}
                  className={styles.toggleButton}
                >
                  {isOpen ? "Ocultar tareas ▲" : "Ver tareas ▼"}
                </button>
                {isOpen && (
                  <div
                    className={`${styles.tasksContainer} ${isOpen ? styles.open : ""}`}
                  >
                    <ul className={styles.tasks}>
                      {job.tasks.map((element, index) => (
                        <div key={index}>
                          <li >{element}</li>
                          <br />
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
