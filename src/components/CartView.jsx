import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useCartStore } from "../hooks";
import { Row } from "primereact/row";
import { ColumnGroup } from "primereact/columngroup";
import { useNavigate } from "react-router-dom";
export const CartView = () => {
  const { total, orders, setDeleteItemEvent, setQuantityEvent } =
    useCartStore();
  const navigate = useNavigate();

  const onDeleteItemTemplate = (rowData) => {
    return (
      <Button
        icon="pi pi-trash"
        rounded
        text
        severity="danger"
        aria-label="Cancel"
        onClick={() => setDeleteItemEvent(rowData.product.id)}
      />
    );
  };

  const quantityBodyTemplate = (product) => {
    return (
      <div className="flex flex-row justify-content-around align-items-center">
        <span>{product.quantity}</span>
        <div>
          <Button
            icon="pi pi-minus"
            rounded
            severity="danger"
            text
            onClick={() =>
              setQuantityEvent({
                id: product.product.id,
                quantity: product.quantity - 1,
              })
            }
          ></Button>
          <Button
            icon="pi pi-plus"
            rounded
            severity="success"
            text
            onClick={() =>
              setQuantityEvent({
                id: product.product.id,
                quantity: product.quantity + 1,
              })
            }
          ></Button>
        </div>
      </div>
    );
  };

  const totalPriceTemplate = (
    <ColumnGroup>
      <Row>
        <Column footer="Total:" colSpan={3} style={{ textAlign: "right" }} />
        <Column footer={`$ ${total}`} align={"right"} />
      </Row>
    </ColumnGroup>
  );

  return (
    <div className="card mt-4 mx-8 xl:px-2">
      <h1>Carro de compras</h1>
      <DataTable
        value={orders}
        tableStyle={{ width: "50rem" }}
        footerColumnGroup={totalPriceTemplate}
      >
        <Column field="product.title" header="NOMBRE"></Column>
        <Column field="product.price" header="PRECIO" sortable></Column>
        <Column
          field="quantity"
          header="CANTIDAD"
          body={quantityBodyTemplate}
        ></Column>
        <Column field="total" header="TOTAL" align={"right"}></Column>
        <Column headerStyle={{ width: "10%" }} body={onDeleteItemTemplate} />
      </DataTable>
      <Button
        label="Seguir comprando"
        severity="info"
        text
        aria-label="Holla"
        icon="pi pi-arrow-left"
        className="mt-2"
        onClick={() => navigate("/catalog")}
      />
    </div>
  );
};
