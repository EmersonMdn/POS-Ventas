import { supabase } from '../index'
const table = 'company'
export async function InsertCompany(p) {
    const { data } = await supabase.from(table).insert(p).select().maybeSingle();

    return data;
}