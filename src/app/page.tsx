import Image from "next/image";
import styles from "./page.module.css";
import { HomePage } from "@/screens/Home"
import { Projects } from "@/screens/Projects";
import { Contact } from "@/screens/Contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomePage/>
      <Projects/>
      <Contact/>
    </div>
  );
}
