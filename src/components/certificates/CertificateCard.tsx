import styles from "./CertificateCard.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { techIcons } from "../ui/Icons";
import { Certificate } from "@/interfaces/certificates.interface";

interface Props {
  certificate?: Certificate;
}

export const CertificateCard = ({ certificate }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <Link
          className={styles.linksContainer}
          href={`https://${certificate?.certificateURL}`}
          target="_blank"
        >
          <FaExternalLinkAlt
            className={`${styles.linkItem} ${styles.gitItem}`}
          />
        </Link>
        <Link href={`/certificate/${certificate?.id}`}>
          <div className={styles.linkCard}>
            <h3 className={styles.projectTitle}>{certificate?.title}</h3>
            <div className={styles.imagesContainer}>
              {certificate?.image && certificate.image.length > 0 ? (
                certificate.image.map((image) => (
                  <Image
                    key={certificate.title}
                    src={`/certificates/${image}`}
                    alt={"Imagen del certificado no encontrada"}
                    width={196}
                    height={125}
                  />
                ))
              ) : (
                <p>No hay imágenes disponibles</p>
              )}
            </div>
            <div className={styles.techsContainer}>
              {certificate?.techsLearned && certificate.techsLearned.length > 0
                ? certificate.techsLearned.map((tech, index) => (
                    <div key={index} className={styles.tech} title={tech.name}>
                      {techIcons[tech.name || ""] || null}
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
