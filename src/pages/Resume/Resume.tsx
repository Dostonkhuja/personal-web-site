import styles from "./Resume.module.css"

export const Resume = () => {
    return (
        <section className={styles.resume} id="Resume">
            <h2 className={styles.resume__fTitle}>Resume</h2>
            <div className={styles.resume__grid}>


                <div className={styles.resume__card}>
                    <h3 className={styles.resume__title}>Experience</h3>

                    <p className={styles.resume__text}>
                        Frontend Developer – IT Group Open Source Project (Jan 2022)
                    </p>

                    <p className={styles.resume__text}>
                        Developed client side hospital management system for patient
                        registration, appointments and doctor monitoring.
                    </p>

                    <p className={styles.resume__text}>
                        Built with React functional components following SOLID principles.
                    </p>
                </div>


                <div className={styles.resume__card}>
                    <h3 className={styles.resume__title}>Education</h3>

                    <p className={styles.resume__text}>PDP IT Academy</p>
                    <p className={styles.resume__text}>Self Study</p>
                </div>


                <div className={styles.resume__card}>
                    <h3 className={styles.resume__title}>Skills</h3>

                    <div className={styles.resume__skills}>
                        <span>HTML</span>
                        <span>SCSS</span>
                        <span>BEM</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>Socket.IO</span>
                        <span>NodeJS</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                        <span>Git</span>
                        <span>SOLID</span>
                    </div>
                </div>


                <div className={styles.resume__card}>
                    <h3 className={styles.resume__title}>Projects</h3>

                    <p className={styles.resume__text}>
                        Facebook Clone Frontend – Sep 2021
                    </p>

                    <p className={styles.resume__text}>
                        social-beatles.netlify.app
                    </p>

                    <p className={styles.resume__text}>
                        Built with React using SOLID architecture with UI / BUSINESS / DAL layers.
                    </p>

                    <p className={styles.resume__text}>
                        Backend: NodeJS, Express, MongoDB, JWT authentication,
                        Joi validation, Winston logging, Socket.IO.
                    </p>
                </div>

            </div>


            <a
                href="/resume.pdf"
                download="Dostonkhuja_Resume.pdf"
                className={styles.resume__button}
            >
                Download Resume
            </a>

        </section>
    )
}