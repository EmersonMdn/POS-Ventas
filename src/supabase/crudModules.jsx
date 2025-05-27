import Swal from "sweetalert2";
import { supabase } from "../index"
const table = 'modules';

export const ShowModules = async () => {
    const { data, error } = await supabase.from(table).select()


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

    return data;
}
