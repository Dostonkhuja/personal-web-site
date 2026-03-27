import styles from "./Skills.module.css"
import {SkillCard, skillsMock} from "../../entities/skill";
import {useTranslation} from "react-i18next";

export default function Skills() {
    const { t } = useTranslation()

    return (
        <section className={styles.skills}>
            <h2 className={styles.skills__title}>  {t("skills.title")}</h2>

            <div className={styles.skills__grid}>
                {skillsMock.map(s => (
                    <SkillCard key={s.name} skill={s} />
                ))}
            </div>
        </section>
    )
}