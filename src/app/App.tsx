import {AppRoutes} from "./Routes.tsx";
import {Navbar} from "../widgets/Navbar";
import {ContactButtons} from "../widgets/ContacButtons";
import {Footer} from "../widgets/Footer";
import styles from './app.module.css'

function App() {
    return (
        <>
            <Navbar />
            <div className={styles.appContent}>
                <ContactButtons />
                <AppRoutes />
            </div>
            <Footer />

        </>
    )
}

export default App