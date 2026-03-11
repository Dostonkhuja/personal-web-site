import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import ThemeToggle from "../../features/ThemeToggle/ui/ThemeToggle.tsx"
import { useTheme } from "../../features/ThemeToggle/model/useTheme.ts"

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleLinkClick = () => setMenuOpen(false)

    return (
        <nav className={styles.navbar}>
            <h2 className={styles.navbar__logo}>Dastan.dev</h2>

            <button
                className={styles.navbar__burger}
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <div className={`${styles.navbar__right} ${menuOpen ? styles.active : ""}`}>
                <ul className={styles.navbar__list}>
                    <li><Link to="/" className={styles.navbar__link} onClick={handleLinkClick}>Home</Link></li>
                    <li><Link to="/about" className={styles.navbar__link} onClick={handleLinkClick}>About</Link></li>
                    <li><Link to="/skills" className={styles.navbar__link} onClick={handleLinkClick}>Skills</Link></li>
                    <li><Link to="/projects" className={styles.navbar__link} onClick={handleLinkClick}>Projects</Link></li>
                    <li><Link to="/contact" className={styles.navbar__link} onClick={handleLinkClick}>Contact</Link></li>
                    <li><Link to="/resume" className={styles.navbar__link} onClick={handleLinkClick}>Resume</Link></li>
                </ul>
                <ThemeToggle currentTheme={theme} toggleTheme={toggleTheme} />
            </div>
        </nav>
    )
}