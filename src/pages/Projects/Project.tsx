import {ProjectCard, projects} from "../../entities/Project";
import styles from './project.module.css'
import {useTranslation} from "react-i18next";

export default function Projects() {
    const { t } = useTranslation()

    return (
        <section className={styles.projects}>
            <h2 className={styles.projects__title}>   {t("projects.title")}</h2>

            <div className={styles.projects__list}>
                {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
        </section>
    )
}