import { motion } from "framer-motion";
import type { SkillsTypes } from "../model/skillsTypes.ts";
import styles from "../../../pages/Skills/skills.module.css";

interface SkillCardProps {
    skill: SkillsTypes
}

export function SkillCard({ skill }: SkillCardProps) {
    return (
        <motion.div
            key={skill.name}
            className={styles.skills__card}
            initial={{ opacity: 0, y: 20 }} // Fade-in va pastdan yuqoriga
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }} // Hover qilganda kattalashish va biroz aylanish
        >
            <img
                src={skill.logo}
                alt={skill.name}
                className={styles["skills__card-logo"]}
            />
            <h4 className={styles["skills__card-name"]}>{skill.name}</h4>
            {skill.level && (
                <span className={styles["skills__card-level"]}>{skill.level}</span>
            )}
        </motion.div>
    );
}
