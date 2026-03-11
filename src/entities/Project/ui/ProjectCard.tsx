import styles from "./ProjectCard.module.css"
import type {projectTypes} from "../model/projectTypes.ts";

interface ProjectCardProps {
    project: projectTypes
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className={styles["project-card"]}>
            <h3 className={styles["project-card__title"]}>{project.name}</h3>
            <p className={styles["project-card__desc"]}>{project.description}</p>
            <a href={project.link} target="_blank" className={styles["project-card__link"]}>
                View Project
            </a>
        </div>
    )
}