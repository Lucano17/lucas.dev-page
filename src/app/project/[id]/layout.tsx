

import type { Metadata } from "next";
import styles from "./layout.module.css"



export const metadata: Metadata = {
  title: "Lucas DLF | Project",
  description: "Bienvenido a mi página web. Mi nombre es Lucas, y soy desarrollador web. Avanti!",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className={styles.container}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
  );
}

