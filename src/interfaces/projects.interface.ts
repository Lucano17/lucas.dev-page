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
    | "Historial de órdenes / ventas"
    | "Categorización de productos"
    | "Generar PDF de venta"
    | "Generar Excel de ventas"

export type ValidPlatforms =
    | "Escritorio"
    | "Web"
    | "Celular"
    


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


export interface Platform {
    name: ValidPlatforms,
    image?: string
}
export interface Techs {
    name: ValidTechs,
    image?: string,
}

export interface Project {
    id: number
    title: string,
    techsUsed: Techs[],
    features?: ValidFeatures[],
    description: string,
    platform: Platform,
    images?: string[],
    show: boolean,
    position?: number,
    gitHubLink?: string,
    webLink?: string,
}