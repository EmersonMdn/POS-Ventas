/* eslint-disable no-empty-pattern */
import React from 'react'
import { CategoriesTemplate, Spinner1, useCompanyStore } from '../index';
import { useQuery } from '@tanstack/react-query';
import { useCategoriesStore } from '../store/CategoriesStore';

const Categories = () => {
    const { showCategories, searchCategories, searcher } = useCategoriesStore();
    const { dataCompany } = useCompanyStore();
    const { isLoading, error } = useQuery({ queryKey: ["show categories", dataCompany?.id], queryFn: () => showCategories({ id_company: dataCompany?.id }), enabled: !!dataCompany, refetchOnWindowFocus: false });
    //search categories
    const { } = useQuery({ queryKey: ["search categories", searcher], queryFn: () => searchCategories({ id_company: dataCompany?.id, description: searcher }), enabled: !!dataCompany, refetchOnWindowFocus: false });

    if (isLoading) return <Spinner1 />
    if (error) return <span>Error...</span>
    return (<CategoriesTemplate />)
}

export default Categories