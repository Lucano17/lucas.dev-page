import React from 'react'
import styles from "./Certificates.module.css"
import { certificates } from "@/seed/seed";
import { CertificatessGrid } from '@/components/certificates/CertificatesGrid';

const myCertificates = certificates.certificates

export const Certificates = () => {
  return (
    <div id='Certificates' className={styles.container}>
      <h2>Mis certificados</h2>
      <div className={styles.certificatesGrid}>
          <CertificatessGrid certificates={myCertificates} />
      </div>
    </div>
  )
}
