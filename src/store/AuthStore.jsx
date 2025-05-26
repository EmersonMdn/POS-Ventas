import { create } from "zustand";
import { supabase, ShowUsers } from "../index";

export const useAuthStore = create((set) => ({
    loginGoogle: async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
        console.log('data:', data)
        // if (data) {
        //     await ShowUsers({ id_auth: data })
        // }
    },
    signOut: async () => {
        await supabase.auth.signOut()
    }

}))