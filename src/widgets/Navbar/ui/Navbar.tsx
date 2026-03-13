import { useState } from "react"
import { Link } from "react-scroll"
import { ThemeToggle, useTheme } from "../../../features/ThemeToggle"
import { navLinks } from "../../../entities/Navbar"
import styles from "./navbar.module.css"
import { useClickSound } from "../../../features/clickSound/useClickSound"

export function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState(navLinks[0].to)

    const playSound = useClickSound()  // hook

    const linkProps = { smooth: true, duration: 500, spy: true }

    return (
        <nav className={styles.navbar}>
            <h2 className={styles.navbar__logo}>&lt;DastanWorks /&gt;</h2>

            <button
                className={styles.navbar__burger}
                onClick={() => { playSound(); setMenuOpen(prev => !prev) }}
                aria-label="Toggle menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <div className={`${styles.navbar__right} ${menuOpen ? styles.active : ""}`}>
                <ul className={styles.navbar__list}>
                    {navLinks.map(link => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={`${styles.navbar__link} ${activeLink === link.to ? styles.activeLink : ""}`}
                                {...linkProps}
                                onSetActive={() => setActiveLink(link.to)}
                                onClick={playSound}
                            >
                                <span onMouseEnter={playSound}>{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <ThemeToggle currentTheme={theme} toggleTheme={toggleTheme} />
            </div>
        </nav>
    )
}
