import { Home } from "../src/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Muscle } from "./pages/Muscle";

export function Root() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='muscle' element={<Muscle />}>
                <Route path=':muscleid' element={<Muscle />} />
                 </Route>

            </Routes>
        </Router>
    )
}
