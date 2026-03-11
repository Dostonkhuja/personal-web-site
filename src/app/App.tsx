import { BrowserRouter as Router } from "react-router-dom"
import {AppRoutes} from "./Routes.tsx";
import Navbar from "../widgets/Navbar/Navbar.tsx";

function App() {
    return (
        <Router>
            <Navbar />
            <AppRoutes />
        </Router>
    )
}

export default App