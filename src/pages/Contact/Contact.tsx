import styles from "./Contact.module.css";
import { useTelegramForm } from "../../features/useTelegramForm";

export const Contact = () => {
    const { name, email, message, loading, error, handleChange, handleSubmit } =
        useTelegramForm();

    return (
        <section className={styles.contact} id="Contact">
            <h2 className={styles.title}>Contact Me</h2>
            <p className={styles.text}>
                Feel free to reach out for collaborations, freelance projects, or just
                to say hi!
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={styles.input}
                    value={name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={styles.input}
                    value={email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className={styles.textarea}
                    value={message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className={styles.btn} disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </section>
    );
};
