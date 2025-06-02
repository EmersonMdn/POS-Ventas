import { create } from 'zustand'
import { DeleteCategorie, EditCategorie, InsertCategories, SearchCategories, ShowCategories } from '../index'

export const useCategoriesStore = create((set, get) => ({
    searcher: "",
    setSearcher: (p) => {
        set({ searcher: p })
    },
    datacategories: [],
    categoriesItemSelect: [],
    params: {},
    showCategories: async (p) => {
        const response = await ShowCategories(p)
        set({ params: p })
        set({ datacategories: response })
        set({ categoriesItemSelect: response[0] })
        return response;
    },
    selectCategorie: (p) => {
        set({ categoriesItemSelect: p })
    },
    insertCategories: async (p, file) => {
        await InsertCategories(p, file)
        const { showCategories } = get();
        const { params } = get();
        set(showCategories(params))
    },
    deleteCategorie: async (p) => {
        await DeleteCategorie(p)
        const { showCategories } = get();
        const { params } = get();
        set(showCategories(params))
    },
    updateCategorie: async (p, fileold, filenew) => {
        await EditCategorie(p, fileold, filenew)
        const { showCategories } = get();
        const { params } = get();
        set(showCategories(params))
    },
    searchCategories: async (p) => {
        const response = await SearchCategories(p);
        set({ datacategories: response });
        return response;
    }
}));