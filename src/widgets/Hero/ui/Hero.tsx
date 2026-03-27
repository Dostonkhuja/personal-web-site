import styles from "./Hero.module.css";
import profile from "../../../shared/assets/myphoto.png";
import { scroller } from "react-scroll"
import { useTranslation } from 'react-i18next'

export function Hero() {
    const { t } = useTranslation()

    const handleScroll = (target: string) => {
        scroller.scrollTo(target, { duration: 500, smooth: true })
    }

    return (
        <div className={styles.hero} id="home">

            <div className={styles.hero__container}>
                <div className={styles.hero__avatarContainer}>
                    <img src={profile} alt="Dastan" className={styles.hero__avatar} />
                </div>
                <h1 className={styles.hero__title}>{t('hero.name')}</h1>
                <h2 className={styles.hero__role}>&lt;{t('hero.role')} /&gt;</h2>
                <p className={styles.hero__desc}>
                    {t('hero.desc')}
                </p>

                <div className={styles.hero__actions}>

                    <div className={styles.hero__btnPrimary}  onClick={() => handleScroll("Projects")}> {t('hero.btn.projects')}</div>
                    <div  className={styles.hero__btnSecondary} onClick={() => handleScroll("Contact")}> {t('hero.btn.contact')}</div>
                </div>
            </div>
        </div>
    );
}