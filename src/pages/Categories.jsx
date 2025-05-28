import React from 'react'
import { CategoriesTemplate, useCompanyStore } from '../index';
import { useQuery } from '@tanstack/react-query';
import { useCategoriesStore } from '../store/CategoriesStore';

const Categories = () => {
    const { showCategories } = useCategoriesStore();
    const {} = useCompanyStore();
    const {} = useQuery({queryKey:["show categories",]});
    return (<CategoriesTemplate />)
}

export default Categories