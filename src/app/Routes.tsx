import Projects from "../pages/Projects/Project.tsx";
import Skills from "../pages/Skills/Skills.tsx";
import {HomePage} from "../pages/Home/HomePage.tsx";
import {Element} from 'react-scroll';
import {About} from "../pages/About/About.tsx";
import {Contact} from "../pages/Contact/Contact.tsx";
import {Resume} from "../pages/Resume/Resume.tsx";

const pages = [
    { name: "Home", component: <HomePage /> },
    { name: "About", component: <About /> },
    { name: "Projects", component: <Projects /> },
    { name: "Skills", component: <Skills /> },
    { name: "Contact", component: <Contact /> },
    { name: "Resume", component: <Resume/> }    // placeholder
]

export const AppRoutes = () => (
    <>
        {pages.map(page => (
            <Element key={page.name} name={page.name}>
                {page.component}
            </Element>
        ))}
    </>
)