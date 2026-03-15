import { FaGithub, FaTelegramPlane, FaDownload } from "react-icons/fa"
import styles from "./ContactButtons.module.css"

export const ContactButtons = () => {
    return (
        <div className={styles.container}>
            <a
                href="https://github.com/Dostonkhuja"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                title="GitHub"
            >
                <FaGithub />
            </a>

            <a
                href="https://t.me/reyx04"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                title="Telegram"
            >
                <FaTelegramPlane />
            </a>

            <a
                href="/resume.pdf"
                download="Dastan_Resume.pdf"
                className={styles.button}
                title="Download Resume"
            >
                <FaDownload />
            </a>
        </div>
    )
}