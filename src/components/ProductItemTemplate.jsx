import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { useCartStore } from "../hooks";
import { useNavigate } from "react-router-dom";

export const ProductItemTemplate = (product) => {
  const { setAddItemEvent } = useCartStore();
  const navigate = useNavigate();

  const onSetAddItem = () => {
    setAddItemEvent(product);
    navigate("/cart");
  };

  return (
    <div className="col-12">
      <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
        <img
          className="w-9 sm:w-9rem xs:w-10rem shadow-2 block xs:block mx-auto border-round h-full"
          src={product.image}
          alt={product.title}
        />
        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <div className="text-2xl font-bold text-900">{product.title}</div>
            <Rating
              value={product.rating.rate}
              readOnly
              cancel={false}
            ></Rating>
            <div className="flex align-items-center gap-3">
              <span className="flex align-items-center gap-2">
                <i className="pi pi-tag"></i>
                <span className="font-semibold">{product.category}</span>
              </span>
            </div>
          </div>
          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            <span className="text-2xl font-semibold">${product.price}</span>
            <Button
              icon="pi pi-shopping-cart"
              className="p-button-rounded"
              disabled={product.inventoryStatus === "OUTOFSTOCK"}
              onClick={() => onSetAddItem()}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
