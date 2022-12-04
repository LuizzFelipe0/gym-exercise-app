import { Home } from "../src/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function Root() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}
