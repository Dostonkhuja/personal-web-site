import { useState, useEffect } from "react"

export const useTheme = () => {
    // Default holatda dark
    const [theme, setTheme] = useState<"light" | "dark">("dark")

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"))

    return { theme, toggleTheme }
}