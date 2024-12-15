


export type ValidTechs = "JavaScript" | "TypeScript" | 
"HTML" | "CSS" | "React.js" | "Next.js" | "Node.js" | "PosgreSQL" | "MySQL" 
| "React Native" | "Angular" | "Tailwind" | "Bootstrap" | "MySQL" | "Docker" | "Prisma"

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