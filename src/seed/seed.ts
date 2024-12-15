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
            "images": [],
            "description": "Mi propia página web, hecha con TypeScript y Next, donde expongo mis conocimientos, proyectos y habilidades",
            "techsUsed": []
        },
        {
            "id": 2,
            "title": "ecommerce-template-1",
            "gitHubLink": "https://github.com/Lucano17/ecommerce-template-1",
            "webLink": "https://ecommerce-template-1.vercel.app/",
            "images": [],
            "description": "Este es un ecommerce de prueba hecho con Next y PosgreSQL, donde probé todas mis habilidades en conjunto para crear una tienda completamente funcional con base de datos y transacciones.",
            "techsUsed": []
          },
          {
            "id": 3,
            "title": "mern-crud-auth",
            "gitHubLink": "mern-crud-auth",
            "webLink": "",
            "images": [],
            "description": "Una TO-DO app hecha con react y express, donde puedes crear una lista de lo que necesites! Desde productos para comprar, actividades a realizar, personas, objetivos y más!",
            "techsUsed": []
          },
          {
            "id": 4,
            "title": "my-landing-page",
            "gitHubLink": "https://github.com/Lucano17/my-landing-page",
            "webLink": "https://earnest-croissant-d12ab3.netlify.app/",
            "images": [],
            "description": "Mi primera web hecha con React",
            "techsUsed": []
          }

    ]
}