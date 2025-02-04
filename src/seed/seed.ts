import { Project } from "@/interfaces/projects.interface";

interface ProjectsData {
    projects: Project[]
}

export const projects: ProjectsData = {

    projects: [

        {
            "id": 1,
            "title": "lucas.dev-page",
            "gitHubLink": "https://github.com/Lucano17/lucas.dev-page",
            "webLink": "",
            "images": ["lucas.dev-page.image1.png"],
            "description": "Mi propia página web, hecha con TypeScript y Next, donde expongo mis conocimientos, proyectos y habilidades",
            "techsUsed": [
                { name: "HTML"},
                { name: "CSS"},
                { name: "TypeScript" },
                { name: "React.js" },
                { name: "Next.js" }]
        },
        {
            "id": 2,
            "title": "ecommerce-template-1",
            "gitHubLink": "https://github.com/Lucano17/ecommerce-template-1",
            "webLink": "https://ecommerce-template-1.vercel.app/",
            "images": ["ecommerce-template.image1.png"],
            "description": "Este es un ecommerce de prueba hecho con Next y PosgreSQL, donde probé todas mis habilidades en conjunto para crear una tienda completamente funcional con base de datos y transacciones.",
            "techsUsed": [
                { name: "HTML"},
                { name: "CSS"},
                { name: "TypeScript" },
                { name: "React.js" },
                { name: "Next.js" },
                { name: "Zustand" },
                { name: "PostgreSQL" },
                { name: "Prisma" },
                { name: "Docker" }
            ]
        },
        {
            "id": 3,
            "title": "tasks-manager",
            "gitHubLink": "https://github.com/Lucano17/task-manager",
            "webLink": "https://task-manager-sigma-two-21.vercel.app/",
            "images": ["task-manager.image1.png"],
            "description": "Una TO-DO app hecha con react y express, donde puedes crear una lista de lo que necesites! Desde productos para comprar, actividades a realizar, personas, objetivos y más!",
            "techsUsed": [
                { name: "HTML"},
                { name: "CSS"},
                { name: "JavaScript" },
                { name: "React.js" },
                { name: "Node.js" },
                { name: "MongoDB"},
                { name: "Express.js"}
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
                { name: "HTML"},
                { name: "TailwindCSS"},
                { name: "TypeScript" },
                { name: "React.js" },
                { name: "Next.js" },
                { name: "Zustand" },
                { name: "Redux" },
            ]
        },
        {
            "id": 5,
            "title": "react-native-games-library",
            "gitHubLink": "https://github.com/Lucano17/react-native-games-library",
            "webLink": "",
            "images": ["react-native-games-library.image1.jpeg"],
            "description": "Aplicación hecha con React Native y Expo, además de NativeWind (TailwindCSS). Esta app hace una llamada a la API de Giant Bomb API, y recupera una lista de juegos y varios datos relacionados con los mismos",
            "techsUsed": [
                { name: "React Native"},
                { name: "JavaScript" },
                { name: "React.js" },
                { name: "TailwindCSS"},
            ]
        },
        {
            "id": 6,
            "title": "react-spa-template",
            "gitHubLink": "https://github.com/Lucano17/my-landing-page",
            "webLink": "https://earnest-croissant-d12ab3.netlify.app/",
            "images": ["react-spa-template.image1.png"],
            "description": "Mi primera app hecha con React",
            "techsUsed": [
                { name: "HTML"},
                { name: "CSS"},
                { name: "JavaScript" },
                { name: "React.js" },
            ]
        },

    ]
}
