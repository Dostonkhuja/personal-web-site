import {Hero} from "../../widgets/Hero";
import styles from "./home.module.css";

export  function HomePage() {
    return (
        <main className={styles.home}>
            <Hero />
            {/*<Stats />*/}
            {/*<FeaturedProjects />*/}
            {/*<CTA />*/}
        </main>
    );
}