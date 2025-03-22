import React from "react";
import styles from "./CertificatesGrid.module.css";
import { CertificateCard } from "./CertificateCard";
import { Certificate } from "@/interfaces/certificates.interface";

interface Props {
  certificates?: Certificate[];
}

export const CertificatessGrid = ({ certificates }: Props) => {
  return (
    <div className={styles.container}>
      {certificates?.map((certificate) => (
        <CertificateCard key={certificate.id} certificate={certificate} />
      ))}
    </div>
  );
};
