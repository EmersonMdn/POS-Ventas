import { create } from "zustand";
import { ShowModules } from "../index";

export const useModulesStore = create((set) => ({
    dataModules: [],
    showModules: async () => {
        const response = await ShowModules()
        set({ dataModules: response })
        return response;
    }
}))