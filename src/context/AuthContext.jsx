import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../supabase/supabase.config"
import { InsertAdmin, ShowUsers, InsertCompany, ShowIdType, ShowRolesByName } from "../index"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (session == null) {
                setUser(null);
            } else {
                setUser(session?.user)
                // console.log("user2222:", session)
                insertData(session?.user?.id, session?.user?.email)
            }
        })

        return () => {
            data.subscription;
        }
    }, [])
    const insertData = async (id_auth, email) => {
        const response = await ShowUsers({ id_auth: id_auth });
        if (response) {
            return;
        } else {
            const responseCompany = await InsertCompany({ id_auth: id_auth });
            const responseIdType = await ShowIdType({ id_company: responseCompany?.id })
            const responseRole = await ShowRolesByName({ name: "superadmin" })
            console.log("responseCompany ", responseCompany);
            console.log("tipo doc", responseIdType);

            const pUser = {
                id_type: responseIdType[0]?.id,
                id_role: responseRole?.id,
                email: email,
                created_at: new Date(),
                id_auth: id_auth,
            }

            await InsertAdmin(pUser)

        }
    }

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}