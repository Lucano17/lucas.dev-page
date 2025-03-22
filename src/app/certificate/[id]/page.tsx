import { certificates } from "@/seed/seed";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import { techIcons } from "@/components/ui/Icons";
import { webLinkIcon } from "@/components/ui/Icons";

type tParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: tParams }) {
  const id = Number((await params).id);
  const certificate = certificates.certificates.find((certificate) => certificate.id === id);

  if (!id) {
    return {
      title: "Lucas.dev | Not found",
      description: "Página del proyecto no encontrada",
    };
  }

  try {
    if (!certificate) throw new Error("Certeficate not found");

    return {
      title: `Lucas.dev | ${certificate?.title}`,
      description: `Página del certificado "${certificate?.title}"`,
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Lucas.dev | Not found",
      description: "Página del certificado no encontrada",
    };
  }
}

export default async function ProjectPage({ params }: { params: tParams }) {
  const id = Number((await params).id);
  const certificate = certificates.certificates.find((certificate) => certificate.id === id);

  if (!certificate) {
    notFound();
  }
  return (
    <div className={styles.container}>
      <h1>Certificado: {certificate?.title}</h1>
      <div className={styles.mainContent}>
        <section className={styles.section}>
          <Image
            src={`/certificates/${certificate.image}`}
            alt={"Imagen del certificado no encontrada"}
            width={350}
            height={250}
            className={styles.projectImage}
          />
          <div className={styles.certificateNumber}>
          <h3>Número del certificado:</h3>
          <p>{certificate.certificateNumber}</p>
          </div>
          <div className={styles.linksContainer}>
            <h3>Visita el sitio web oficial del certificado:</h3>
            <div className={styles.projectLinks}>
              <Link
                href={`${certificate.certificateURL}`}
                target="_blank"
                className={styles.link}
              >
                Link del certificado <span>{webLinkIcon}</span>
              </Link>
            </div>
          </div>
        </section>
        <aside className={styles.aside}>
          <div className={styles.data}>
            <div>
              <h2>Tecnologías usadas:</h2>
              <div className={styles.techGrid}>
                {certificate.techsLearned?.map((tech) => (
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
          </div>
            
            {
              certificate.description?
                (
                  <div className={styles.description}>
                  <h3>Descripción</h3>
                  <p>{certificate.description}</p>
                  </div>
                )
              : ("")
            }
            
        </aside>
      </div>
    </div>
  );
}
