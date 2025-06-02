import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Categories, LoginTemplate, ProtectedRoute, Settings, Spinner1, useCompanyStore, UserAuth, useUsersStore } from "../index";
import { useQuery } from "@tanstack/react-query";

export function MyRoutes() {
    const { user } = UserAuth();
    const { dataUsers, showUsers } = useUsersStore();
    const { showCompany, dataCompany } = useCompanyStore();
    const { isLoading, error } = useQuery({
        queryKey: 'Show users',
        queryFn: showUsers, refetchOnWindowFocus: false
    });
    const { data: responseCompany } = useQuery({
        queryKey: ['Show company', dataUsers?.id],
        queryFn: () => showCompany({ _id_user: dataUsers?.id }),
        enabled: !!dataUsers, refetchOnWindowFocus: false
    })

    if (isLoading) {
        return (<Spinner1 />)
    }
    if (error) {
        return (<span>Error...</span>)
    }

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