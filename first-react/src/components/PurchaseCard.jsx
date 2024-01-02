import PropTypes from "prop-types";
import { BsTrashFill } from "react-icons/bs";
import { useContext } from "react";
import { PurchaseContext } from "../context/PurchaseContext";

export const PurchaseCard = ({ product }) => {
  const { onDeleteProduct } = useContext(PurchaseContext);

  const deleteProduct = () => {
    onDeleteProduct(product.id);
  };

  return (
    <div className="bg-gray-800 text-white p-5 rounded shadow-md">
      <span className="text-lg font-semibold">{product.product}</span>
      <span className="block text-sm mt-2">Amount: {product.quantity}</span>
      <span className="block text-sm mt-2">${product.value}</span>
      <button
        onClick={deleteProduct}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
      >
        <BsTrashFill />
      </button>
    </div>
  );
};

PurchaseCard.propTypes = {
  product: PropTypes.object.isRequired,
};
