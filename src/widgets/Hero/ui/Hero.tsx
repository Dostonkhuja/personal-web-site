import styles from "./Hero.module.css";
// import galaxy from "../../../shared/assets/background.png";
import profile from "../../../shared/assets/myphoto.png";

export function Hero() {
    return (
        <div className={styles.hero} id="home">
            <div
                className={styles.hero__background}
                // style={{ backgroundImage: `url(${galaxy})` }}
            />

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
                    <a href="#projects" className={styles.hero__btnPrimary}>View Projects</a>
                    <a href="#contact" className={styles.hero__btnSecondary}>Contact</a>
                </div>
            </div>
        </div>
    );
}