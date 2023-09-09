import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { DataView } from "primereact/dataview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primeflex/primeflex.css";

import { getProducts } from "./services/productService";

const products = [
  {
    name: "Reloj",
    category: "Innecesario",
    rating: 4,
    price: 234,
    inventoryStatus: "INSTOCK",
  },
];

export const CartApp = () => {
  const productList = getProducts();
  const itemTemplate = (product) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img
            className="w-9 sm:w-9rem xs:w-10rem shadow-2 block xs:block mx-auto border-round h-full"
            src={`https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80`}
            alt={product.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              <Rating value={product.rating} readOnly cancel={false}></Rating>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.category}</span>
                </span>
                <Tag value={product.inventoryStatus} severity={"success"}></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${product.price}</span>
              <Button
                icon="pi pi-shopping-cart"
                className="p-button-rounded"
                disabled={product.inventoryStatus === "OUTOFSTOCK"}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="card">
        <DataView value={products} itemTemplate={itemTemplate} />
      </div>
      <div className="card mt-4 ml-8 xl:px-2">
        <DataTable value={productList} tableStyle={{ width: "50rem" }}>
          <Column field="id" header="ID" sortable></Column>
          <Column field="name" header="Nombre" sortable></Column>
          <Column field="description" header="DESCRIPCIÓN" sortable></Column>
          <Column
            field="price"
            header="PRECIO"
            sortable
            align={"right"}
          ></Column>
        </DataTable>
      </div>
    </>
  );
};
