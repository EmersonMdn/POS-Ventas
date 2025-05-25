import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { LoginTemplate } from "../index";

export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginTemplate />} />
        </Routes>
    )
}