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
                { name: "PosgreSQL" },
                { name: "Prisma" },
                { name: "Docker" }
            ]
        },
        {
            "id": 3,
            "title": "mern-crud-auth",
            "gitHubLink": "https://github.com/Lucano17/mern-crud-auth",
            "webLink": "",
            "images": ["task-manager.image1.png"],
            "description": "Una TO-DO app hecha con react y express, donde puedes crear una lista de lo que necesites! Desde productos para comprar, actividades a realizar, personas, objetivos y más!",
            "techsUsed": [
                { name: "HTML"},
                { name: "CSS"},
                { name: "JavaScript" },
                { name: "React.js" },
                { name: "Node.js" },
            ]
        },
        {
            "id": 4,
            "title": "my-landing-page",
            "gitHubLink": "https://github.com/Lucano17/my-landing-page",
            "webLink": "https://earnest-croissant-d12ab3.netlify.app/",
            "images": ["landing-page.image1.png"],
            "description": "Mi primera web hecha con React",
            "techsUsed": [
                { name: "HTML"},
                { name: "CSS"},
                { name: "JavaScript" },
                { name: "React.js" },
            ]
        }

    ]
}
