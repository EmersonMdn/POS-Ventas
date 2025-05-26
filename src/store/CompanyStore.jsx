import { create } from "zustand";
import { InsertCompany } from "../index";

export const useCompanyStore = create((set) => ({
    insertCompany: async (p) => {
        const response = await InsertCompany(p)
        console.log("insertCompany:", response)
    }
}))