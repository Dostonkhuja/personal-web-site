import ProjectCard from "../../features/ProjectCard/ProjectCard"
import type {Project} from "../../entities/Project/project.ts";

const projects: Project[] = [
    { id: 1, name: "E-commerce App", description: "Online store using React & TS", link: "#" },
    { id: 2, name: "Task Manager", description: "Manage tasks with React Hooks", link: "#" },
    { id: 3, name: "Weather App", description: "Weather forecast using API", link: "#" }
]

export default function Projects() {
    return (
        <section style={{ padding: "80px 20px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Projects</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
                {projects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </section>
    )
}