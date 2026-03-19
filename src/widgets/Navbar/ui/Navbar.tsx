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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    const playSound = useClickSound()
    const linkProps = { smooth: true, duration: 500, spy: true }

    // --- Resize kuzatish ---
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768
            setIsMobile(mobile)

            if (!mobile) {
                setMenuOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    // --- Click outside (faqat mobile) ---
    useEffect(() => {
        if (!menuOpen || !isMobile) return

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

        document.addEventListener("click", handleClickOutside)

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [menuOpen, isMobile])

    return (
        <nav className={styles.navbar}>
            {/* LOGO */}
            <div className={styles.navbar__left}>
                <a href="/" className={styles.logoLink}>
                    <img
                        src={`${import.meta.env.BASE_URL}DS_logo.svg`}
                        alt="DS Logo"
                        className={styles.logo}
                    />
                </a>
            </div>

            {/* MOBILE: toggle + burger */}
            {isMobile && (
                <div className={styles.navbar__mobileActions}>
                    <ThemeToggle currentTheme={theme} toggleTheme={toggleTheme}/>
                    <button
                        className={styles.navbar__burger}
                        onClick={() => {
                            playSound()
                            setMenuOpen(prev => !prev)
                        }}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            )}


            {/* MENU */}
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
                                    setMenuOpen(false)
                                }}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* DESKTOP: toggle */}
            {!isMobile && (
                <div className={styles.navbar__themeDesktop}>
                    <ThemeToggle currentTheme={theme} toggleTheme={toggleTheme}/>
                </div>
            )}
        </nav>
    )
}