import React from 'react'
import styles from "./Certificates.module.css"
import { certificates } from "@/seed/seed";
import { CertificatessGrid } from '@/components/certificates/CertificatesGrid';

const myCerteficates = certificates.certificates

export const Certificates = () => {
  return (
    <div id='Certificates' className={styles.container}>
      <h2>Mis certificados</h2>
      <div className={styles.projectsGrid}>
          <CertificatessGrid certificates={myCerteficates} />
      </div>
    </div>
  )
}
