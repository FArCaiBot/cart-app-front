import { useEffect, useState } from "react";
import { getProducts } from "../services";

export function useGetProducts() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    const listarProductos = async () => {
        setLoading(true);
        await setProductList(getProducts());
        setLoading(false)
    }

    useEffect(() => { listarProductos() }, [])

    return { loading, productList }

}