import { CartView, CatalogDataView } from "../components";
import { Navigate, Route, Routes } from "react-router-dom";

export const CartRoutes = () => {
  return (
    <Routes>
      <Route path="/catalog" element={<CatalogDataView />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="/" element={<Navigate to={"/catalog"} />} />
    </Routes>
  );
};
