import { projects } from "@/seed/seed";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import { techIcons } from "@/components/ui/Icons";
import { gitHubIcon, webLinkIcon } from "@/components/ui/Icons";

type tParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: tParams }) {
  const id = Number((await params).id);
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

export default async function ProjectPage({ params }: { params: tParams }) {
  const id = Number((await params).id);
  const project = projects.projects.find((project) => project.id === id);

  if (!project) {
    notFound();
  }
  return (
    <div className={styles.container}>
      <h1>Proyecto: {project?.title}</h1>
      <div className={styles.mainContent}>
        <section className={styles.section}>
          <Image
            src={`/projects/${project.images}`}
            alt={`${project.title}` || "Imagen del proyecto"}
            width={350}
            height={250}
            className={styles.projectImage}
          />
          <div className={styles.linksContainer}>
            <h3>Conoce más acerca del proyecto:</h3>
            <div className={styles.projectLinks}>
              <Link
                href={`${project.webLink}`}
                target="_blank"
                className={styles.link}
              >
                Web <span>{webLinkIcon}</span>
              </Link>
              <Link
                href={`${project.gitHubLink}`}
                target="_blank"
                className={styles.link}
              >
                GitHub <span>{gitHubIcon}</span>
              </Link>
            </div>
          </div>
        </section>
        <aside className={styles.aside}>
          <div className={styles.data}>
            <div>
              <h2>Tecnologías usadas:</h2>
              <div className={styles.techGrid}>
                {project.techsUsed?.map((tech) => (
                  <div
                    key={`${tech.name}-${id}`}
                    className={styles.techsContainer}
                  >
                    <p className={styles.techIcons}>
                      {techIcons[tech.name || ""] || null}
                    </p>
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.featuresContainer}>
              <h2>Otras características:</h2>
              <div>
                <ul className={styles.featureGrid}>
                  {project.features?.map((feature) => (
                    <li key={`${feature}-${id}`}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.description}>
            <h3>Descripción</h3>
            <p>{project.description}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
