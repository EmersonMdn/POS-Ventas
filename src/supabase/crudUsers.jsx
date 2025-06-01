import { supabase } from "./supabase.config"
const table = 'users'
export const ShowUsers = async (p) => {
    const { data, error } = await supabase
        .from(table)
        .select()
        .eq('id_auth', p.id_auth)
        .maybeSingle();

    if (error) {
        console.error('Error fetching user:', error);
        throw error;
    }

    return data;
}

export const InsertAdmin = async (p) => {
    const { data, error } = await supabase.from(table).insert(p)

    if (error) {
        console.error('Error inserting admin user:', error);
        throw error;
    }

    return data;
}

export const GetIdAuthSupabase = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session != null) {
        const { user } = session;
        const idAuth = user.id;
        return idAuth;
    }
} 