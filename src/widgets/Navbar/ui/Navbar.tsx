import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import styles from "./navbar.module.css"
import { ThemeToggle, useTheme } from "../../../features/ThemeToggle"

export function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()  // hozirgi route path

    const handleLinkClick = () => setMenuOpen(false)

    // link active bo‘lishini tekshiruvchi function
    const isActive = (path:string) => location.pathname === path

    return (
        <nav className={styles.navbar}>
            <h2 className={styles.navbar__logo}>&lt;DastanWorks /&gt; </h2>

            <button
                className={styles.navbar__burger}
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <div className={`${styles.navbar__right} ${menuOpen ? styles.active : ""}`}>
                <ul className={styles.navbar__list}>
                    <li>
                        <Link
                            to="/"
                            className={`${styles.navbar__link} ${isActive("/") ? styles.activeLink : ""}`}
                            onClick={handleLinkClick}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`${styles.navbar__link} ${isActive("/about") ? styles.activeLink : ""}`}
                            onClick={handleLinkClick}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/skills"
                            className={`${styles.navbar__link} ${isActive("/skills") ? styles.activeLink : ""}`}
                            onClick={handleLinkClick}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className={`${styles.navbar__link} ${isActive("/projects") ? styles.activeLink : ""}`}
                            onClick={handleLinkClick}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={`${styles.navbar__link} ${isActive("/contact") ? styles.activeLink : ""}`}
                            onClick={handleLinkClick}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/resume"
                            className={`${styles.navbar__link} ${isActive("/resume") ? styles.activeLink : ""}`}
                            onClick={handleLinkClick}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
                <ThemeToggle currentTheme={theme} toggleTheme={toggleTheme} />
            </div>
        </nav>
    )
}