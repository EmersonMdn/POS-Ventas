import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Categories, LoginTemplate, ProtectedRoute, Settings, UserAuth } from "../index";

export function MyRoutes() {
    const { user } = UserAuth()
    return (
        <Routes>
            <Route element={<ProtectedRoute user={user} redirectTo='/login' />} >
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/settings/categories" element={<Categories />} />

            </Route>
            <Route path="/login" element={<LoginTemplate />} />
        </Routes>
    )
}