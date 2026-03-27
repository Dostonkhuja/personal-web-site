import { useState } from "react"
import { scroller } from "react-scroll"
import styles from "./About.module.css"
import { useTranslation } from "react-i18next"

export const About = () => {
    const { t } = useTranslation()
    const [expanded, setExpanded] = useState(false)

    const handleScrollToSkills = () => {
        scroller.scrollTo("Skills", { duration: 500, smooth: true })
    }

    return (
        <section className={styles.about} id="About">
            <h2 className={styles.about__title}>{t("about.title")}</h2>

            <div className={`${styles.textWrapper} ${expanded ? styles.open : ""}`}>
                <p className={styles.about__text}>
                    {t("about.text")}
                </p>

                {!expanded && <div className={styles.fade} />}
            </div>

            <div className={styles.buttons}>
                <button
                    className={styles.showMore}
                    onClick={() => setExpanded(prev => !prev)}
                >
                    {expanded ? t("about.showLess") : t("about.showMore")}
                </button>

                <button
                    className={styles.about__btn}
                    onClick={handleScrollToSkills}
                >
                    {t("about.button")}
                </button>
            </div>
        </section>
    )
}