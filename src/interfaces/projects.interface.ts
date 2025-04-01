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
    | "RESTful API"
    | "Windows Forms"
    | "Aplicación de escritorio"
    


export type ValidTechs = 
    | "JavaScript" 
    | "TypeScript" 
    | "HTML" 
    | "CSS" 
    | "React.js" 
    | "Next.js" 
    | "Node.js" 
    | "Express.js"
    | "C#"
    | ".Net"
    | "PostgreSQL" 
    | "MySQL" 
    | "Microsoft SQL Server"
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
    id: number
    title: string,
    techsUsed: Techs[],
    features?: ValidFeatures[],
    description: string,
    images?: string[],
    gitHubLink?: string,
    webLink?: string,
}