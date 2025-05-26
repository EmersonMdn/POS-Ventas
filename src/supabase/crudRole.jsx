import { supabase } from "../index"
const table = 'roles';

export const ShowRolesByName = async (p) => {
    const { data } = await supabase.from(table).select().eq('name', p.name).maybeSingle();
    return data;
}
