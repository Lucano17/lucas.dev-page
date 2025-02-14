import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { TbFileCv } from "react-icons/tb";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiDocker,
  SiPrisma,
  SiMongodb,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import { TbSquareLetterZ, TbBrandReactNative } from "react-icons/tb";
import { JSX } from "react";

export const techIcons: Record<string, JSX.Element> = {
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  "React Native": <TbBrandReactNative />,
  Angular: <SiAngular />,
  TailwindCSS: <SiTailwindcss />,
  Bootstrap: <SiBootstrap />,
  Docker: <SiDocker />,
  Prisma: <SiPrisma />,
  MongoDB: <SiMongodb />,
  Redux: <SiRedux />,
  Zustand: <TbSquareLetterZ />,
};

export const gitHubIcon = <IoLogoGithub />;
export const webLinkIcon = <FaExternalLinkAlt />;
export const linkedInIcon = <IoLogoLinkedin />;
export const gmailIcon = <BiLogoGmail />;
export const cvIcon = <TbFileCv />;
