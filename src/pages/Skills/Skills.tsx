import styles from "./Skills.module.css"
import {skillsMock} from "../../entities/skill/model/skillsMock.ts";

export default function Skills() {
    return (
        <section className={styles.skills}>
            <h2 className={styles.skills__title}>Skills</h2>

            <div className={styles.skills__grid}>
                {skillsMock.map(skill => (
                    <div key={skill.name} className={styles.skills__card}>
                        <img src={skill.logo} alt={skill.name} className={styles["skills__card-logo"]} />
                        <h4 className={styles["skills__card-name"]}>{skill.name}</h4>
                        {skill.level && <span className={styles["skills__card-level"]}>{skill.level}</span>}
                    </div>
                ))}
            </div>
        </section>
    )
}