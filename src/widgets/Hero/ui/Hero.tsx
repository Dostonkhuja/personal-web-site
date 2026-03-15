import styles from "./Hero.module.css";
import profile from "../../../shared/assets/myphoto.png";
import { scroller } from "react-scroll"

export function Hero() {

    const handleScroll = (target: string) => {
        scroller.scrollTo(target, { duration: 500, smooth: true })
    }

    return (
        <div className={styles.hero} id="home">

            <div className={styles.hero__container}>
                <div className={styles.hero__avatarContainer}>
                    <img src={profile} alt="Dastan" className={styles.hero__avatar} />
                </div>

                <h1 className={styles.hero__title}>I'm Dastan</h1>
                <h2 className={styles.hero__role}>&lt;Frontend Developer /&gt;</h2>
                <p className={styles.hero__desc}>
                    Crafting modern, scalable apps using React and TypeScript.
                </p>

                <div className={styles.hero__actions}>

                    <div className={styles.hero__btnPrimary}  onClick={() => handleScroll("Projects")}>View Projects</div>
                    <div  className={styles.hero__btnSecondary} onClick={() => handleScroll("Contact")}>Contact</div>
                </div>
            </div>
        </div>
    );
}