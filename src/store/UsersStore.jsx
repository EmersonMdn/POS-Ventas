import { create } from "zustand";
import { GetIdAuthSupabase, ShowUsers } from "../index";

export const useUsersStore = create((set) => ({
    dataUsers: [],
    showUsers: async () => {
        const idAuth = await GetIdAuthSupabase();
        const response = await ShowUsers({ id_auth: idAuth })
        set({ dataUsers: response })
        return response;
    }
}))