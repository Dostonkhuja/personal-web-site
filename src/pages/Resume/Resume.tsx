import styles from "./Resume.module.css"

export const Resume = () => {
    return (
        <section className={styles.resume} id="Resume">
            <h2 className={styles.title}>My Resume</h2>
            <p className={styles.text}>
                Here’s a brief overview of my experience, skills, and education. You can also download my full resume.
            </p>

            <div className={styles.sections}>
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Experience</h3>
                    <ul className={styles.list}>
                        <li>Frontend Developer – XYZ Company (2022 - Present)</li>
                        <li>Freelance Web Developer – Various Clients (2020 - 2022)</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Education</h3>
                    <ul className={styles.list}>
                        <li>BSc in Computer Science – ABC University (2016 - 2020)</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Skills</h3>
                    <ul className={styles.list}>
                        <li>React, TypeScript, Tailwind CSS</li>
                        <li>Responsive Design & UI/UX</li>
                        <li>Git, REST APIs, Agile workflow</li>
                    </ul>
                </div>
            </div>

            <a
                href="/resume.pdf"
                className={styles.btn}
                target="_blank"
                rel="noopener noreferrer"
            >
                Download Resume
            </a>
        </section>
    )
}
