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
  SiDotnet,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import {
  TbSquareLetterZ,
  TbBrandReactNative,
  TbBrandCSharp,
} from "react-icons/tb";
import { JSX } from "react";

export const techIcons: Record<string, JSX.Element | string> = {
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  "C#": <TbBrandCSharp />,
  ".Net": <SiDotnet />,
  PostgreSQL: <SiPostgresql />,
  "SQL Server": <DiMsqlServer />,
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
