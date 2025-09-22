import styles from "./page.module.css";
import { HomePage } from "@/screens/Home"
import { Projects } from "@/screens/Projects";
import { Contact } from "@/screens/Contact";
import { Certificates } from "@/screens/Certificates";
import { Education } from "@/screens/Education";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomePage/>
      <Education/>
      <Projects/>
      <Certificates/>
      <Contact/>
    </div>
  );
}
