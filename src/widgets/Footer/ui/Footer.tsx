import { FaGithub, FaTelegramPlane, FaDownload, FaArrowUp } from "react-icons/fa"
import styles from "./Footer.module.css"
import { animateScroll as scroll } from "react-scroll"

export const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.social}>
                <a href="https://github.com/dastan" target="_blank" rel="noopener noreferrer" title="GitHub" className={styles.icon}><FaGithub /></a>
                <a href="https://t.me/dastan" target="_blank" rel="noopener noreferrer" title="Telegram" className={styles.icon}><FaTelegramPlane /></a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" title="Download Resume" className={styles.icon}><FaDownload /></a>
            </div>

            <div className={styles.email}>Email: <a href="mailto:dastan@example.com">dastan@example.com</a></div>

            <button className={styles.topBtn} onClick={() => scroll.scrollToTop()}>
                <FaArrowUp />
            </button>
            <p className={styles.text}>© {new Date().getFullYear()} DastanWorks. All rights reserved.</p>
        </footer>
    )
}
