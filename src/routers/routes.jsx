import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { LoginTemplate, ProtectedRoute, UserAuth } from "../index";

export function MyRoutes() {
    const { user } = UserAuth()
    return (
        <Routes>
            <Route element={<ProtectedRoute user={user} redirectTo='/login' />} >
                <Route path="/" element={<Home />} />

            </Route>
            <Route path="/login" element={<LoginTemplate />} />
        </Routes>
    )
}