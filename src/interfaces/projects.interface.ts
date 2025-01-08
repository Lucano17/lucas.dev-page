


export type ValidTechs = 
    | "JavaScript" 
    | "TypeScript" 
    | "HTML" 
    | "CSS" 
    | "React.js" 
    | "Next.js" 
    | "Node.js" 
    | "Express.js"
    | "PosgreSQL" 
    | "MySQL" 
    | "MongoDB"
    | "React Native" 
    | "Angular" 
    | "Tailwind" 
    | "Bootstrap" 
    | "Docker" 
    | "Prisma";

export interface Techs {
    name?: ValidTechs,
    image?: string,
}

export interface Project {
    id?: number
    title?: string,
    techsUsed?: Techs[],
    description?: string,
    images?: string[],
    gitHubLink?: string,
    webLink?: string,
}