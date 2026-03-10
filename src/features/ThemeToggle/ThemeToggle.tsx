import styles from "./ThemeToggle.module.css"

interface ThemeToggleProps {
    currentTheme: "light" | "dark"
    toggleTheme: () => void
}

export default function ThemeToggle({ currentTheme, toggleTheme }: ThemeToggleProps) {
    return (
        <button
            className={styles["theme-toggle"]}
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {currentTheme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    )
}