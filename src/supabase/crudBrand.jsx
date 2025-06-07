import Swal from 'sweetalert2';
import { supabase } from '../index'
const table = 'brands'

export async function InsertBrands(params) {
    const { error } = await supabase.rpc("insertarmarcas", params)

    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
        return;
    }
}

export async function ShowBrands(p) {
    const { data } = await supabase.
        from(table)
        .select()
        .eq('id_company', p.id_company)
        .order('id', { ascending: false })
    return data;
}

export async function SearchBrands(p) {
    const { data } = await supabase
        .from(table)
        .select()
        .eq('id_company', p.id_company)
        .ilike('name', '%' + p.name + "%");
    return data;
}

export async function DeleteBrand(p) {
    const { error } = await supabase.from(table).delete().eq("id", p.id);

    if (error) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops",
            text: error.message,
        });
        return;
    }
}

export async function EditBrand(p) {
    const { error } = await supabase.rpc("updatemarca", p)

    if (error) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops",
            text: error.message,
        });
        return;
    }
}
