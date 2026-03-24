import styles from "./ProjectCard.module.css"
import type { projectTypes } from "../model/projectTypes.ts";

interface ProjectCardProps {
    project: projectTypes
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className={styles["project-card"]}>
            <img
                src={project.image}
                alt={project.name}
                className={styles["project-card__image"]}
            />

            <div className={styles["project-card__body"]}>
                <div className={styles["project-card__content"]}>
                    <h3 className={styles["project-card__title"]}>{project.name}</h3>
                    <p className={styles["project-card__desc"]}>{project.description}</p>
                    <div className={styles["project-card__tags"]}>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className={styles["project-card__tag"]}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={styles["project-card__actions"]}>
                    <a
                        href={project.link}
                        target="_blank"
                        className={styles["project-card__btn"]}
                    >
                        View Project
                    </a>

                    <a
                        href={project.source}
                        target="_blank"
                        className={styles["project-card__btn-outline"]}
                    >
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    )
}