import React from 'react'
import { CategoriesTemplate, useCompanyStore } from '../index';
import { useQuery } from '@tanstack/react-query';
import { useCategoriesStore } from '../store/CategoriesStore';

const Categories = () => {
    const { showCategories } = useCategoriesStore();
    const { dataCompany } = useCompanyStore();
    const { data } = useQuery({ queryKey: ["show categories", dataCompany?.id], queryFn: () => showCategories({ id_company: dataCompany?.id }) });
    return (<CategoriesTemplate />)
}

export default Categories