import { supabase } from "./supabase.config"
const table = 'users'
export const ShowUsers = async (p) => {
    const { data } = await supabase
        .from(table)
        .select()
        .eq('id_auth', p.id_auth)
        .maybeSingle();
    return data;
}

export const InsertAdmin = async (p) => {
    await supabase.from(table).insert(p);

}