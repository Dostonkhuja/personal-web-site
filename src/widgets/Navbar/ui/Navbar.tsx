import { useState, useEffect } from "react"
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

    // --- Mobile click outside to close menu ---
    useEffect(() => {
        if (!menuOpen) return

        const handleClickOutside = (e: MouseEvent) => {
            const menu = document.querySelector(`.${styles.navbar__right}`)
            const burger = document.querySelector(`.${styles.navbar__burger}`)
            if (
                menu &&
                burger &&
                !menu.contains(e.target as Node) &&
                !burger.contains(e.target as Node)
            ) {
                setMenuOpen(false)
            }
        }

        // Faqat mobile uchun
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false)
            }
        }

        document.addEventListener("click", handleClickOutside)
        window.addEventListener("resize", handleResize)

        return () => {
            document.removeEventListener("click", handleClickOutside)
            window.removeEventListener("resize", handleResize)
        }
    }, [menuOpen])

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar}>
                <a href="/" className={styles.logoLink}>
                    <img src="/DS_logo.svg" alt="DS Logo" className={styles.logo}/>
                </a>
                <h2 className={styles.navbarLogo}>
                    &lt;DastanWorks /&gt;
                </h2>
            </div>

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
                                onClick={() => {
                                    playSound()
                                    setMenuOpen(false) // link bosilganda menu yopilsin
                                }}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={styles.navbar__theme}>
                    <ThemeToggle currentTheme={theme} toggleTheme={toggleTheme}/>
                </div>
            </div>
        </nav>
    )
}