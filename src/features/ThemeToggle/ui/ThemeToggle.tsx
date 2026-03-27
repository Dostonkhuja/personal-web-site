import styles from "./themeToggle.module.css"
import { useTranslation } from "react-i18next"

interface ThemeToggleProps {
    currentTheme: "light" | "dark"
    toggleTheme: () => void
}

export function ThemeToggle({ currentTheme, toggleTheme }: ThemeToggleProps) {
    const { t } = useTranslation()

    return (
        <button
            className={styles["theme-toggle"]}
            onClick={toggleTheme}
            aria-label={t("theme.toggle.aria")}
        >
            {currentTheme === "light"
                ? t("theme.toggle.dark")
                : t("theme.toggle.light")}
        </button>
    )
}