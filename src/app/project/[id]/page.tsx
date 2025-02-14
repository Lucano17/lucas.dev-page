import { projects } from "@/seed/seed";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import { techIcons } from "@/components/projects/ProjectCard";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = Number(params.id);
  const project = projects.projects.find((project) => project.id === id);

  if (!id) {
    return {
      title: "Lucas.dev | Not found",
      description: "Página del proyecto no encontrada",
    };
  }

  try {
    if (!projects) throw new Error("Project not found");

    return {
      title: `Lucas.dev | ${project?.title}`,
      description: `Página del proyecto ${project?.title}`,
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Lucas.dev | Not found",
      description: "Página del proyecto no encontrada",
    };
  }
}

export default async function ProjectPage({ params }: Props) {
  const id = Number(params.id);
  const project = projects.projects.find((project) => project.id === id);

  if (!project) {
    notFound();
  }
  return (
    <div className={styles.container}>
      <h1>Proyecto: {project?.title}</h1>
      <div className={styles.mainContent}>
        <Image
          src={`/projects/${project.images}`}
          alt={`${project.title}` || "Imagen del proyecto"}
          width={350}
          height={250}
          className={styles.projectImage}
        />
        <div>
          <div className={styles.data}>
            <h2>Tecnologías usadas:</h2>
            <div className={styles.grid}>
              {project.techsUsed?.map((tech) => (
                <div
                  key={`${tech.name}-${id}`}
                  className={styles.techsContainer}
                >
                  <p>{techIcons[tech.name || ""] || null}</p>
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.linksContainer}>
            <h3>Conoce más acerca del proyecto:</h3>
            <div className={styles.projectLinks}>
              <Link
                href={`${project.webLink}`}
                target="_blank"
                className={styles.link}
              >
                Web
              </Link>
              <Link
                href={`${project.gitHubLink}`}
                target="_blank"
                className={styles.link}
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.description}>
        <h3>Descripción</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
