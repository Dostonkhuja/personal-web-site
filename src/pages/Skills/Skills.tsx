import styles from "./Skills.module.css"

// Logolar
import reactLogo from "../../shared/assets/reactLogo.png"
import htmlLogo from "../../shared/assets/htmlLogo.png"
import cssLogo from "../../shared/assets/cssLogo.png"
import jsLogo from "../../shared/assets/jsLogo.png"
import reduxLogo from "../../shared/assets/reduxLogo.png"
import nodeLogo from "../../shared/assets/nodeLogo.png"
import expressLogo from "../../shared/assets/expressLogo.png"
import mongoLogo from "../../shared/assets/mongoLogo.png"
import reactNativeLogo from "../../shared/assets/reactNativeLogo.png"
import tanstackLogo from "../../shared/assets/tanstackLogo.png"

type Skill = {
    name: string
    logo: string
    level?: string
}

const skills: Skill[] = [
    { name: "React JS", logo: reactLogo, level: "Advanced" },
    { name: "HTML", logo: htmlLogo, level: "Advanced" },
    { name: "CSS / SCSS", logo: cssLogo, level: "Advanced" },
    { name: "JavaScript", logo: jsLogo, level: "Advanced" },
    { name: "Redux / Redux Toolkit", logo: reduxLogo, level: "Intermediate" },
    { name: "Node JS", logo: nodeLogo, level: "Intermediate" },
    { name: "Express", logo: expressLogo, level: "Intermediate" },
    { name: "MongoDB", logo: mongoLogo, level: "Intermediate" },
    { name: "React Native", logo: reactNativeLogo, level: "Learning" },
    { name: "TanStack Query", logo: tanstackLogo, level: "Learning" },
]

export default function Skills() {
    return (
        <section className={styles.skills}>
            <h2 className={styles.skills__title}>Skills</h2>

            <div className={styles.skills__grid}>
                {skills.map(skill => (
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