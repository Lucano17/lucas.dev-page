import { Certificate } from "@/interfaces/certificates.interface";
import { Project } from "@/interfaces/projects.interface";

interface ProjectsData {
    projects: Project[]
}

interface CertificatesData {
    certificates: Certificate[]
}

export const projects: ProjectsData = {

    projects: [

        {
            "id": 1,
            "title": "lucas.dev-page",
            "gitHubLink": "https://github.com/Lucano17/lucas.dev-page",
            "webLink": "",
            "images": ["lucas.dev-page.image1.png"],
            "description": "Mi propia página web, hecha con TypeScript y Next (próximamente este proyecto será mudado a Astro), donde expongo mis conocimientos, proyectos y habilidades",
            "techsUsed": [
                { name: "HTML" },
                { name: "CSS" },
                { name: "TypeScript" },
                { name: "React.js" },
                { name: "Next.js" }],
            "features": [
                "Desarrollo web",
                "Gestor de estado",
                "Enrutado",
                "RESTful API",
            ],
        },
        {
            "id": 2,
            "title": "ecommerce-template-1",
            "gitHubLink": "https://github.com/Lucano17/ecommerce-template-1",
            "webLink": "https://ecommerce-template-1.vercel.app/",
            "images": ["ecommerce-template.image1.png"],
            "description": "Este es un ecommerce de prueba hecho con Next y PosgreSQL, donde probé todas mis habilidades en conjunto para crear una tienda completamente funcional con base de datos y transacciones.",
            "techsUsed": [
                { name: "HTML" },
                { name: "CSS" },
                { name: "TypeScript" },
                { name: "React.js" },
                { name: "Next.js" },
                { name: "Zustand" },
                { name: "PostgreSQL" },
                { name: "Prisma" },
                { name: "Docker" }
            ],
            "features": [
                "Desarrollo web",
                "Autenticación de usuario",
                "Base de datos SQL",
                "Gestor de estado",
                "Roles de usuario",
                "Transacciones de pago",
                "Enrutado",
                "RESTful API",
            ],
        },
        {
            "id": 3,
            "title": "tasks-manager",
            "gitHubLink": "https://github.com/Lucano17/task-manager",
            "webLink": "https://task-manager-sigma-two-21.vercel.app/",
            "images": ["task-manager.image1.png"],
            "description": "Una TO-DO app hecha con react y express, donde puedes crear una lista de lo que necesites! Desde productos para comprar, actividades a realizar, personas, objetivos y más!",
            "techsUsed": [
                { name: "HTML" },
                { name: "CSS" },
                { name: "JavaScript" },
                { name: "React.js" },
                { name: "Node.js" },
                { name: "MongoDB" },
                { name: "Express.js" }
            ],
            "features": [
                "Desarrollo web",
                "Autenticación de usuario",
                "Base de datos NoSQL",
                "Enrutado",
                "RESTful API",
            ]
        },
        {
            "id": 4,
            "title": "poke-api",
            "gitHubLink": "https://github.com/Lucano17/poke-api",
            "webLink": "https://poke-api-vert-one.vercel.app",
            "images": ["poke-api.image1.png"],
            "description": "No solo una simple PokeApi, toda la PokeInfo que buscas!",
            "techsUsed": [
                { name: "HTML" },
                { name: "TailwindCSS" },
                { name: "TypeScript" },
                { name: "React.js" },
                { name: "Next.js" },
                { name: "Zustand" },
                { name: "Redux" },
            ],
            "features": [
                "Desarrollo web",
                "Gestor de estado",
                "Enrutado",
                "RESTful API",
            ],
        },
        {
            "id": 5,
            "title": "react-native-games-library",
            "gitHubLink": "https://github.com/Lucano17/react-native-games-library",
            "webLink": "",
            "images": ["react-native-games-library.image1.jpeg"],
            "description": "Aplicación hecha con React Native y Expo, además de NativeWind (TailwindCSS). Esta app hace una llamada a la API de Giant Bomb API, y recupera una lista de juegos y varios datos relacionados con los mismos",
            "techsUsed": [
                { name: "React Native" },
                { name: "JavaScript" },
                { name: "React.js" },
                { name: "TailwindCSS" },
            ],
            "features": [
                "Aplicación móvil",
                "Enrutado",
                "RESTful API",
            ],
        },
        {
            "id": 6,
            "title": "react-spa-template",
            "gitHubLink": "https://github.com/Lucano17/my-landing-page",
            "webLink": "https://earnest-croissant-d12ab3.netlify.app/",
            "images": ["react-spa-template.image1.png"],
            "description": "Mi primera app hecha con React",
            "techsUsed": [
                { name: "HTML" },
                { name: "CSS" },
                { name: "JavaScript" },
                { name: "React.js" },
            ],
            "features": [
                "Desarrollo web"
            ]
        },

    ]
}

export const certificates: CertificatesData = {
    certificates: [
        {
            "id": 1,
            title: "Next.js framework with TypeScript",
            description: "",
            techsLearned: [
                {name: "HTML"},
                {name: "CSS"},
                {name: "TypeScript"},
                {name: "React.js"},
                {name: "Next.js"},
                {name: "PostgreSQL"},
                {name: "Zustand"},
                {name: "Redux"},
            ],
            image: ["certificate.nextjs.jpg"],
            certificateURL: "ude.my/UC-d74a1298-b34a-4e14-86c7-8fb824f7d678",
            certificateNumber: "UC-d74a1298-b34a-4e14-86c7-8fb824f7d678",
        },
        {
            "id": 2,
            title: "Curso profesional de C# Avanzado",
            description: "",
            techsLearned: [
                {name: "HTML"},
                {name: "CSS"},
                {name: "C#"},
                {name: ".Net"},
                {name: "SQL Server"},
            ],
            image: ["certificate.csharp.jpg"],
            certificateURL: "ude.my/UC-a666080c-b18b-4d33-a3a4-d5f9da0979e4",
            certificateNumber: "UC-a666080c-b18b-4d33-a3a4-d5f9da0979e4",
        }
    ]
}
