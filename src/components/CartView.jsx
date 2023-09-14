import { Button } from 'primereact/button';
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'


export const CartView = ({ items = [] }) => {
    const cartList = items;
    return (
        <div className="card mt-4 ml-8 xl:px-2">
            <h1 >Carro de compras</h1>
            <DataTable value={cartList} tableStyle={{ width: "50rem" }}>
                <Column field="product.name" header="NOMBRE" ></Column>
                <Column field="product.price" header="PRECIO" sortable></Column>
                <Column field="quantity" header="CANTIDAD" ></Column>
                <Column field="total" header="TOTAL" ></Column>
                <Column
                    headerStyle={{ width: '10%' }}
                    body={() => { return (<Button icon="pi pi-trash" rounded text severity="danger" aria-label="Cancel" />) }} />
            </DataTable>
        </div>
    )
}

