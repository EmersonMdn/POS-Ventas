import { supabase } from "../index"
const table = 'id_type';

export const ShowIdType = async (p) => {
    const { data, error } = await supabase
        .from(table)
        .select()
        .eq('id_company', p.id_company);

    if (error) {
        console.error('Error fetching idTypes:', error);
        throw error;
    }

    return data;
}
