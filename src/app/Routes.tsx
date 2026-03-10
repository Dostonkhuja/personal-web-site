import { Routes, Route } from "react-router-dom"
import Projects from "../pages/Projects/Project.tsx";
import Skills from "../pages/Skills/Skills.tsx";

export const AppRoutes = () => (
    <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        {/*<Route path="/about" element={<About />} />*/}
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        {/*<Route path="/contact" element={<Contact />} />*/}
        {/*<Route path="/resume" element={<Resume />} />*/}
    </Routes>
)