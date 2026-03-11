import type {SkillsTypes} from "../model/skillsTypes.ts";
import styles from "../../../pages/Skills/skills.module.css";

interface SkillCardProps {
    skill: SkillsTypes
}

export function SkillCard({ skill }: SkillCardProps) {
    return (
        <div key={skill.name} className={styles.skills__card}>
            <img src={skill.logo} alt={skill.name} className={styles["skills__card-logo"]} />
            <h4 className={styles["skills__card-name"]}>{skill.name}</h4>
            {skill.level && <span className={styles["skills__card-level"]}>{skill.level}</span>}
        </div>
    )
}