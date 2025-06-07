/* eslint-disable no-empty-pattern */
import React from 'react'
import { BrandTemplate } from '../index'
import { Spinner1, useCompanyStore } from '../index';
import { useQuery } from '@tanstack/react-query';
import { useBrandsStore } from '../store/BrandsStore'

const Brand = () => {
    const { showBrands, searchBrands, searcher } = useBrandsStore();
    const { dataCompany } = useCompanyStore();
    const { isLoading, error } = useQuery({
        queryKey: ["show brand", dataCompany?.id],
        queryFn: () => showBrands({ id_company: dataCompany?.id }),
        enabled: !!dataCompany,
        refetchOnWindowFocus: false
    });

    const { } = useQuery({
        queryKey: ["search brand", searcher],
        queryFn: () => searchBrands({ id_company: dataCompany?.id, name: searcher }),
        enabled: !!dataCompany,
        refetchOnWindowFocus: false
    });

    if (isLoading) return <Spinner1 />
    if (error) return <span>Error...</span>
    return (<BrandTemplate />)
}

export default Brand