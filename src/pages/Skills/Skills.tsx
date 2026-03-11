import styles from "./Skills.module.css"
import {SkillCard, skillsMock} from "../../entities/skill";

export default function Skills() {
    return (
        <section className={styles.skills}>
            <h2 className={styles.skills__title}>Skills</h2>

            <div className={styles.skills__grid}>
                {skillsMock.map(s => (
                    <SkillCard key={s.name} skill={s} />
                ))}
            </div>
        </section>
    )
}