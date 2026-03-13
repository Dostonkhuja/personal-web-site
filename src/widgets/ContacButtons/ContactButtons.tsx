import { FaGithub, FaTelegramPlane, FaDownload } from "react-icons/fa"
import styles from "./ContactButtons.module.css"

export const ContactButtons = () => {
    return (
        <div className={styles.container}>
            <a href="https://github.com/dastan" target="_blank" rel="noopener noreferrer" className={styles.button} title="GitHub">
                <FaGithub />
            </a>
            <a href="https://t.me/dastan" target="_blank" rel="noopener noreferrer" className={styles.button} title="Telegram">
                <FaTelegramPlane />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.button} title="Download Resume">
                <FaDownload />
            </a>
        </div>
    )
}
