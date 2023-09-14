import "primeflex/primeflex.css";
import { CartView, CatalogDataView } from "./components";
import { useState } from "react";

const initialCartItems = [
];
export const CartApp = () => {

  const [cartItems, setCartItems] = useState(initialCartItems)

  const onAddItem = (product) => {
    setCartItems(...cartItems, { product, quantity: 0, total: 0 })
  }

  return (
    <>
      <CatalogDataView />
      <CartView items={initialCartItems} />
    </>
  );
};
