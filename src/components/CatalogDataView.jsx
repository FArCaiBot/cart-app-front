import { DataView } from 'primereact/dataview'
import React from 'react'
import { useGetProducts } from '../hooks'
import { ProductItemTemplate } from '.';

export const CatalogDataView = () => {
    const { productList } = useGetProducts();
    return (
        <div className="card">
            <DataView value={productList} itemTemplate={ProductItemTemplate} />
        </div>
    )
}
