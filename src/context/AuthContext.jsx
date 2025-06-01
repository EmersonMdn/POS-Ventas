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
                insertData(session?.user.id, session?.user.email)
            }
        })

        return () => {
            data.subscription;
        }
    }, [])

    const insertData = async (id_auth, email) => {
        console.log("Iniciando insertData para:", id_auth);

        const response = await ShowUsers({ id_auth: id_auth });
        console.log("Respuesta de ShowUsers:", response);

        if (response) {
            console.log("Usuario ya existe, omitiendo creación");
            return;
        }
        console.log("Creando nueva compañía...");
        const responseCompany = await InsertCompany({ id_auth });
        console.log("Compañía creada:", responseCompany);


        console.log("Obteniendo tipo de documento...");
        const responseIdType = await ShowIdType({ id_company: responseCompany?.id });
        console.log("Tipos de documento:", responseIdType);


        console.log("Obteniendo rol...");
        const responseRole = await ShowRolesByName({ name: "superadmin" });
        console.log("Rol obtenido:", responseRole);

        const pUser = {
            id_type: responseIdType[0]?.id,
            id_role: responseRole?.id,
            email: email,
            created_at: new Date(),
            id_auth: id_auth,
        }

        await InsertAdmin(pUser)


    }

    console.log("Renderizando AuthContextProvider, user:", user);
    
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}