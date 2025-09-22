import { Certificate } from "@/interfaces/certificates.interface";
import { Education } from "@/interfaces/education.interface";
import { Project } from "@/interfaces/projects.interface";

interface ProjectsData {
    projects: Project[]
}

interface CertificatesData {
    certificates: Certificate[]
}

interface EducationData {
    careers: Education[]
}

export const education: EducationData = {
    careers: [
        {
            id: 1,
            institutionName: "Universidad Tecnológica Nacional",
            careerName: "Tecnicatura Universitaria en Programación",
            institutionLogo: "utn_logo.jpg",
            grade: "Pre-grado",
            years: 2,
            hours: 1375,
            planEstudio: {
                firstQ: ["Programación I", "Arquitectura y Sistemas Operativos",
                    "Organización Empresarial", "Matemáticas"],
                secondQ: ["Programación II", "Base de datos I", "Probabilidad y Estadística", "Inglés I"],
                thirdQ: ["Programación III", "Base de datos II", "Metodología de Sistemas I", "Inglés II"],
                fourthQ: ["Programación IV", "Metodología de Sistemas II",
                    "Introducción al análisis de datos", "Legislación",
                    "Gestión de desarrollo de software", "Trabajo Práctico Integrador"
                ],
            },
            planEstudioPDF: "tup.pdf",
            startedAt: "11/08/2025"
        }]
}

export const projects: ProjectsData = {

    projects: [

        {
            "id": 1,
            "title": "Mi portfolio",
            "show": true,
            "position": 1,
            "gitHubLink": "https://github.com/Lucano17/lucas.dev-page",
            "webLink": "",
            "platform": { name: "Web" },
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
            "title": "Tienda online",
            "show": true,
            "position": 2,
            "gitHubLink": "https://github.com/Lucano17/ecommerce-template-1",
            "webLink": "https://ecommerce-template-1.vercel.app/",
            "platform": { name: "Web" },
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
                "Categorización de productos",
                "Historial de órdenes / ventas"
            ],
        },
        {
            "id": 3,
            "title": "Tasks Manager",
            "show": true,
            "position": 4,
            "gitHubLink": "https://github.com/Lucano17/task-manager",
            "webLink": "https://task-manager-sigma-two-21.vercel.app/",
            "platform": { name: "Web" },
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
            "title": "Poke Api",
            "show": true,
            "position": 6,
            "gitHubLink": "https://github.com/Lucano17/poke-api",
            "webLink": "https://poke-api-vert-one.vercel.app",
            "platform": { name: "Web" },
            "images": ["poke-api.image1.png"],
            "description": "No solo una simple PokeApi, toda la PokeInfo que buscas! Cuenta con un menú para ver una lista de los 151 pokémon de Kanto, tus evoluciones, sus sprites, sus versiones variocolor (shiny) y sus movimientos. También podrás ver sus tipos elementales, con un diseño personalizado para cada uno. También podrás marcar tus pokémon favoritos y guardarlos en el almacenamiento local de tu navegador de preferencia",
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
            "title": "Biblioteca de videojuegos - Mobile",
            "show": false,
            "gitHubLink": "https://github.com/Lucano17/react-native-games-library",
            "webLink": "",
            "platform": { name: "Celular" },
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
            "title": "Point of Sell - Eco",
            "show": true,
            "position": 5,
            "gitHubLink": "https://github.com/Lucano17/EcoPoS-System",
            "webLink": "",
            "platform": { name: "Escritorio" },
            "images": ["eco-pos-system.image1.png"],
            "description": "Desarrollé un punto de venta con C#, .NET 8  y WindowsForms, donde tengo un formulario de ingreso de usuario, roles 'administrador' y 'usuario', me conecto a una base de datos y desde ahí opero con los productos, clientes, ventas y facturas.",
            "techsUsed": [
                { name: "C#" },
                { name: ".Net" },
                { name: "Microsoft SQL Server" },
            ],
            "features": [
                "Aplicación de escritorio",
                "Windows Forms",
                "Autenticación de usuario"
            ]
        },
        {
            "id": 7,
            "title": "Point of Sell - Mid",
            "show": true,
            "position": 3,
            "gitHubLink": "https://github.com/Lucano17/MidPoS-System",
            "webLink": "",
            "platform": { name: "Escritorio" },
            "images": ["mid-pos-system.image1.png"],
            "description": "Desarrollé un Punto de Venta con C#, .NET 8, WinForms y Microsoft SQL Server, donde no solo podés realizar tus ventas con una interfaz cómoda, eficiente e intuitiva, sino también ordenar tus productos por categoráis, manejar distintos timpos y roles de usuario, ver el historial de ventas, ventas realizadas por tus vendedores, realizar reportes de las mismas y mucho más!.",
            "techsUsed": [
                { name: "C#" },
                { name: ".Net" },
                { name: "Microsoft SQL Server" },
            ],
            "features": [
                "Aplicación de escritorio",
                "Windows Forms",
                "Autenticación de usuario",
                "Roles de usuario",
                "Base de datos SQL",
                "Categorización de productos",
                "Historial de órdenes / ventas",
                "Generar PDF de venta",
                "Generar Excel de ventas"
            ]
        },
        // {
        //     "id": 7,
        //     "title": "react-spa-template",
        //     "gitHubLink": "https://github.com/Lucano17/my-landing-page",
        //     "webLink": "https://earnest-croissant-d12ab3.netlify.app/",
        //     "images": ["react-spa-template.image1.png"],
        //     "description": "Mi primera app hecha con React",
        //     "techsUsed": [
        //         { name: "HTML" },
        //         { name: "CSS" },
        //         { name: "JavaScript" },
        //         { name: "React.js" },
        //     ],
        //     "features": [
        //         "Desarrollo web"
        //     ]
        // },


    ]
}

export const certificates: CertificatesData = {
    certificates: [
        {
            "id": 1,
            title: "Next.js framework with TypeScript",
            description: "Este curso cuenta con una amplia gama de tecnologías y recursos altamente útiles para desarrollar aplicaciones web robustas. Entre las más testacables se encuentran TypeScript, React.js, Next.js, base de datos SQL y más. Este curso cuenta con un proyecto final muy completo: un E-commerce con base de datos SQL, registro y gestión de usuarios, con sus roles y permisos pertinentes. Además le agregué por mi cuenta transacciones de pago mediante Mercado Pago (el curso está hecho con PayPal, pero no tengo permisos en Argentina). Este proyecto me parece muy interesante, ya que cuenta con un fuerte desarrollo tanto en el Front-end como en el Back-end.",
            techsLearned: [
                { name: "HTML" },
                { name: "CSS" },
                { name: "TypeScript" },
                { name: "React.js" },
                { name: "Next.js" },
                { name: "PostgreSQL" },
                { name: "Zustand" },
                { name: "Redux" },
            ],
            image: ["certificate.nextjs.jpg"],
            certificateURL: "ude.my/UC-d74a1298-b34a-4e14-86c7-8fb824f7d678",
            certificateNumber: "UC-d74a1298-b34a-4e14-86c7-8fb824f7d678",
        },
        {
            "id": 2,
            title: "Curso profesional de C# Avanzado",
            description: "En este curso aprendí los fundamentos de C# y .NET, además de aprender y usar la interfaz gráfica de Windows Forms y ASP.NET, y la base de datos Microsoft SQL Server. Este curso cuenta con un proyecto final muy interesante, una aplicación Point of Sell de escritorio, con registro y gestión de usuarios, con sus roles y permisos pertinentes. Con lo aprendido en este curso, podré desarrollar tanto aplicaciones de escritorio como para la web.",
            techsLearned: [
                { name: "HTML" },
                { name: "CSS" },
                { name: "C#" },
                { name: ".Net" },
                { name: "Microsoft SQL Server" },
            ],
            image: ["certificate.csharp.jpg"],
            certificateURL: "ude.my/UC-a666080c-b18b-4d33-a3a4-d5f9da0979e4",
            certificateNumber: "UC-a666080c-b18b-4d33-a3a4-d5f9da0979e4",
        }
    ]
}
