import { useDispatch, useSelector } from "react-redux";
import { onAddNewItem, onChangeQuantity, onDeleteItem } from "../store";

export const useCartStore = () => {
  const { orders } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const setAddItemEvent = (product) => {
    dispatch(onAddNewItem({ product, quantity: 1, total: product.price * 1 }));
  };

  const setDeleteItemEvent = (productID) => {
    dispatch(onDeleteItem(productID));
  };

  const setQuantityEvent = (data) => {
    dispatch(onChangeQuantity(data));
  };

  return {
    // propiedades
    orders,
    total: orders.reduce((a, b) => a + b.total, 0).toFixed(2),
    //metodos
    setAddItemEvent,
    setDeleteItemEvent,
    setQuantityEvent,
  };
};
