import { supabase } from '../index'
const table = 'company'
export async function InsertCompany(p) {
    const { data, error } = await supabase
        .from(table)
        .insert(p)
        .select()
        .maybeSingle();
    if (error) {
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: error.message,
        // });
        return;
    }
    return data;
}