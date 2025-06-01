import { create } from "zustand";
import { InsertCompany, ShowCompanyByUser } from "../index";

export const useCompanyStore = create((set) => ({
    dataCompany: [],
    showCompany: async (p) => {
        const response = await ShowCompanyByUser(p)
        set({ dataCompany: response })
    },
    insertCompany: async (p) => {
        const response = await InsertCompany(p)
        console.log("insertCompany:", response)
    }
}))