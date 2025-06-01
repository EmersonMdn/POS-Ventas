import { create } from "zustand";
import { supabase, ShowUsers } from "../index";

export const useAuthStore = create((set) => ({
    loginGoogle: async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
        });
    },
    signOut: async () => {
        await supabase.auth.signOut()
    }

}))