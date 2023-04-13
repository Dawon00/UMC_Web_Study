import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import "./index.css";
import Jobs from "./pages/Jobs";
import Realty from "./pages/Realty";
import Car from "./pages/Car";
import Detail from "./pages/Detail";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route>
                <Route path="/nearby-stores" element={<StorePage />}></Route>
                <Route path="/jobs" element={<Jobs />}></Route>
                <Route path="/realty" element={<Realty />}></Route>
                <Route path="/car" element={<Car />}></Route>
            </Routes>
        </div>
    );
}

export default App;
