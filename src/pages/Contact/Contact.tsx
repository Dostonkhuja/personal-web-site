import styles from "./Contact.module.css";
import { useTelegramForm } from "../../features/useTelegramForm";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();

    const { name, email, message, loading, error, handleChange, handleSubmit } =
        useTelegramForm();

    return (
        <section className={styles.contact} id="Contact">
            <h2 className={styles.title}>{t("contact.title")}</h2>

            <p className={styles.text}>{t("contact.text")}</p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder={t("contact.name")}
                    className={styles.input}
                    value={name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder={t("contact.email")}
                    className={styles.input}
                    value={email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder={t("contact.message")}
                    className={styles.textarea}
                    value={message}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className={styles.btn} disabled={loading}>
                    {loading ? t("contact.sending") : t("contact.send")}
                </button>

                {error && <p style={{ color: "red" }}>{t("contact.error")}</p>}
            </form>
        </section>
    );
};