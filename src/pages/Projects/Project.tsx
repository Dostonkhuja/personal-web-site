import ProjectCard from "../../entities/Project/ui/ProjectCard.tsx";
import {projects} from "../../entities/Project/model/projectsMock.ts";
import styles from './project.module.css'

export default function Projects() {
    return (
        <section className={styles.projects}>
            <h2 className={styles.projects__title}>Projects</h2>

            <div className={styles.projects__list}>
                {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
        </section>
    )
}