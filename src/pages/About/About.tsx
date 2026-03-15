import { scroller } from "react-scroll"
import styles from "./About.module.css"

export const About = () => {
    const handleScrollToSkills = () => {
        scroller.scrollTo("Skills", { duration: 500, smooth: true })
    }

    return (
        <section className={styles.about} id="About">
            <h2 className={styles.about__title}>About Me</h2>

            <p className={styles.about__text}>
                I’m Dastan, a frontend developer specializing in React and modern web applications.
                I create responsive, maintainable, and interactive websites.
            </p>

            <p className={styles.about__text}>
                Experienced with React, TypeScript, and Tailwind CSS. Completed several projects
                ranging from small portfolio sites to larger web apps.
            </p>

            <p className={styles.about__text}>
                I enjoy turning complex problems into clean, maintainable code, and I’m passionate
                about learning new technologies and improving user experiences.
            </p>

            <button className={styles.about__btn} onClick={handleScrollToSkills}>
                See my Skills
            </button>
        </section>
    )
}
