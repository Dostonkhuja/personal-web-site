import {AppRoutes} from "./Routes.tsx";
import {Navbar} from "../widgets/Navbar";
import {ContactButtons} from "../widgets/ContacButtons";
import {Footer} from "../widgets/Footer";

function App() {
    return (
        <>
            <ContactButtons />
            <Navbar />
            <AppRoutes />
            <Footer />
        </>
    )
}

export default App