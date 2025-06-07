import { create } from 'zustand'
import { SearchBrands, ShowBrands, DeleteBrand, InsertBrands, EditBrand } from '../index'

export const useBrandsStore = create((set, get) => ({
    searcher: "",
    setSearcher: (p) => {
        set({ searcher: p })
    },
    databrand: [],
    brandItemSelect: [],
    params: {},
    showBrands: async (p) => {
        const response = await ShowBrands(p)
        set({ params: p })
        set({ databrand: response })
        set({ brandItemSelect: response[0] })
        return response;
    },
    selectBrand: (p) => {
        set({ brandItemSelect: p })
    },
    insertBrands: async (p) => {
        await InsertBrands(p)
        const { showBrands } = get();
        const { params } = get();
        set(showBrands(params))
    },
    deleteBrand: async (p) => {
        await DeleteBrand(p)
        const { showBrands } = get();
        const { params } = get();
        set(showBrands(params))
    },
    updateBrand: async (p) => {
        await EditBrand(p)
        const { showBrands } = get();
        const { params } = get();
        set(showBrands(params))
    },
    searchBrands: async (p) => {
        const response = await SearchBrands(p);
        set({ databrand: response });
        return response;
    }
}));