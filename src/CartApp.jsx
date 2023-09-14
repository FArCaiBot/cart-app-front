import "primeflex/primeflex.css";
import { CartView, CatalogDataView } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

export const CartApp = () => {
  return (
    <>
      <Provider store={store}>
        <CatalogDataView />
        <CartView />
      </Provider>
    </>
  );
};
