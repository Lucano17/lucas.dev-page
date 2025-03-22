import styles from "./page.module.css";
import { HomePage } from "@/screens/Home"
import { Projects } from "@/screens/Projects";
import { Contact } from "@/screens/Contact";
import { Certificates } from "@/screens/Certificates";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomePage/>
      <Projects/>
      <Certificates/>
      <Contact/>
    </div>
  );
}
