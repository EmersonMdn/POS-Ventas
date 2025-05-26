import Swal from 'sweetalert2';
import { supabase } from '../index'
const table = 'categories'

export async function InsertCategories(params, file) {
    const { error, data } = await supabase.rpc("InsertCategories", params)

    if (error) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops",
            text: error.message,
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }
    const img = file.size;
    if (img != undefined) {
        const new_id = data;
        const urlImage = await uploadImage(new_id, file);
        const pIconEdit = {
            icon: urlImage.publicUrl,
            id: new_id
        }
        await EditIconCategories(pIconEdit)
    }
}

async function uploadImage(idCategorie, file) {
    const route = `categories/${idCategorie}`;
    const { data, error } = await supabase.storage
        .from("images")
        .upload(route, file, {
            cacheControl: '0',
            upsert: true
        })
    if (error) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops",
            text: error.message,
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    if (data) {
        const { data: urlImage } = await supabase.storage.from('images').getPublicUrl(route);
        return urlImage;
    }
}

async function EditIconCategories(p) {
    const { error } = await supabase.from('categories').update(p).eq('id', p.id);

    if (error) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops",
            text: error.message,
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }
}


export async function ShowCategories(p) {
    const { data } = await supabase.from(table).select().eq('id_company', p.id_company).order('id', { ascending: false })
    return data;
}