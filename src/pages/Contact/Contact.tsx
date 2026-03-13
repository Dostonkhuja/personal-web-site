import styles from "./Contact.module.css"

export const Contact = () => {
    return (
        <section className={styles.contact} id="Contact">
            <h2 className={styles.title}>Contact Me</h2>
            <p className={styles.text}>
                Feel free to reach out for collaborations, freelance projects, or just to say hi!
            </p>

            <form className={styles.form}>
                <input
                    type="text"
                    placeholder="Your Name"
                    className={styles.input}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className={styles.input}
                />
                <textarea
                    placeholder="Your Message"
                    className={styles.textarea}
                />
                <button type="submit" className={styles.btn}>
                    Send Message
                </button>
            </form>
        </section>
    )
}
