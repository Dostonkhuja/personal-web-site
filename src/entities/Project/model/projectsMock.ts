import type {projectTypes} from "./projectTypes.ts";
import backend from "../../../shared/assets/backEND.jpg"
import frontend from "../../../shared/assets/SN.jpg"
import eCommerce from "../../../shared/assets/e-commerce.jpg"

export const projects: projectTypes[] = [
    {
        id: 1,
        name: "E-commerce App",
        description: "This project demonstrates my ability to build scalable frontend systems, not just screens. I implemented a production-style e-commerce frontend with clear feature boundaries (FSD), predictable state flow (Redux Toolkit), and reusable UI patterns. The codebase is structured for growth: domain-oriented modules, typed API integration, cart persistence/synchronization, and clean component composition. Overall, it reflects strong ownership of architecture, maintainability, and real-world product thinking.",
        link: "https://dostonkhuja.github.io/e-commerce",
        source: "https://github.com/Dostonkhuja/e-commerce",
        image: eCommerce,
        technologies: ["React", "TypeScript", "CSS","FSD DESIGN","Redux toolkit"]
    },
    // {
    //     id: 2,
    //     name: "project B. for example (Task Manager)",
    //     description: "Manage tasks with React Hooks",
    //     link: "#",
    //     source: "https://github.com/your-repo",
    //     image: mock,
    //     technologies: ["React", "Hooks", "LocalStorage"]
    // },
    // {
    //     id: 3,
    //     name: "project C. for example (Weather App)",
    //     description: "Weather forecast using API",
    //     link: "#",
    //     source: "https://github.com/your-repo",
    //     image: mock,
    //     technologies: ["React", "API", "CSS"]
    // },
    {
        id: 4,
        name: "Social network backend",
        description: "This website includes features such as communication between users, sharing public status updates, organizing discussions, liking posts, sending private messages, and several other functionalities.",
        link: "https://social-beatles.onrender.com/",
        source: "https://github.com/Dostonkhuja/full-stack-social-network/tree/main/server",
        image: backend,
        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "mongoose",
            "jsonwebtoken",
            "dotenv",
            "cors",
            "joi",
            "bcrypt",
            "multer",
            "cloudinary",
            "socket.io",
            "winston",
            "winston-mongodb",
            "lodash",
            "express-async-errors",
            "joi-password-complexity",
            "cloudinary-multer"
        ]
    },
    {
        id: 5,
        name: "Social network frontend",
        description: "The client is built on SOLID principles with three layers: UI, BUSINESS, and DAL.\n" +
            "\n" +
            "UI: React functional components and hooks (useEffect)\n" +
            "BUSINESS: Redux Toolkit for state management\n" +
            "DAL: Independent objects for server requests\n" +
            "\n" +
            "Real-time chat, user visit tracking, and multi-user messaging use Socket.IO with a SOLID-compliant socketIo-redux-middleware.",
        link: "https://social-beatles.netlify.app",
        source: "https://github.com/Dostonkhuja/full-stack-social-network/tree/main/client",
        image: frontend,
        technologies: [
            "react",
            "react-redux",
            "material-ui/react",
            "react-router-dom",
            "axios",
            "reduxjs/toolkit",
            "formik",
            "socket.io-client",
            "redux-socket.io",
            "react-infinite-scroll-component",
            "timeago.js",
            "timeago-react",
            "emoji-picker-react",
            "react-image-lightbox",
            "react-viewer",
            "dateformat"
        ]
    }
]