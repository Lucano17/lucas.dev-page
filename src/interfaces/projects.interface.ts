export type ValidFeatures = 
    | "Base de datos SQL"
    | "Base de datos NoSQL"
    | "Transacciones de pago"
    | "Roles de usuario"
    | "Autenticación de usuario"
    | "Desarrollo web"
    | "Aplicación móvil"
    | "Gestor de estado"
    | "Enrutado"
    


export type ValidTechs = 
    | "JavaScript" 
    | "TypeScript" 
    | "HTML" 
    | "CSS" 
    | "React.js" 
    | "Next.js" 
    | "Node.js" 
    | "Express.js"
    | "PostgreSQL" 
    | "MySQL" 
    | "MongoDB"
    | "React Native" 
    | "Angular" 
    | "TailwindCSS" 
    | "Bootstrap" 
    | "Docker" 
    | "Prisma"
    | "Redux"
    | "Zustand"

export interface Techs {
    name?: ValidTechs,
    image?: string,
}

export interface Project {
    id?: number
    title?: string,
    techsUsed?: Techs[],
    features?: ValidFeatures[],
    description?: string,
    images?: string[],
    gitHubLink?: string,
    webLink?: string,
}