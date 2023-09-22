import { DataView } from "primereact/dataview";
import React, { useState } from "react";
import { useGetProducts } from "../hooks";
import { ProductItemTemplate } from ".";
import { Dropdown } from "primereact/dropdown";

const sortOptions = [
  { label: "Price High to Low", value: "!price" },
  { label: "Price Low to High", value: "price" },
];

export const CatalogDataView = () => {
  const { productList, loading } = useGetProducts();
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState(0);
  const [sortField, setSortField] = useState("");

  const onSortChange = (event) => {
    const value = event.value;

    if (value.indexOf("!") === 0) {
      setSortOrder(-1);
      setSortField(value.substring(1, value.length));
      setSortKey(value);
    } else {
      setSortOrder(1);
      setSortField(value);
      setSortKey(value);
    }
  };

  const header = () => {
    return (
      <Dropdown
        options={sortOptions}
        value={sortKey}
        optionLabel="label"
        placeholder="Sort By Price"
        onChange={onSortChange}
        className="w-full sm:w-14rem"
      />
    );
  };
  return (
    <div className="card">
      <DataView
        value={productList}
        itemTemplate={ProductItemTemplate}
        rows={5}
        paginator
        header={header()}
        sortField={sortField}
        sortOrder={sortOrder}
        loading={loading}
      />
    </div>
  );
};
