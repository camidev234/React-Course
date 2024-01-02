import { useState } from "react";
// import PropTypes from "prop-types";
import { useContext } from "react";
import { PurchaseContext } from "../context/PurchaseContext";

export const ProductForm = () => {
  const [product, setProduct] = useState({
    product: "",
    value: 0,
  });

  const [errorMessage, setErrorMessage] = useState(false);

  const { onAddProduct } = useContext(PurchaseContext);

  const handleProduct = (e) => setProduct({ ...product, product: e.target.value });
  const handleValue = (e) => {
    const newValue = e.target.value;

    if (newValue.trim() === "") {
      setErrorMessage(false);
    }

    setProduct({ ...product, value: newValue });
  };

  const addProduct = () => {
    if (Number.isNaN(Number(product.value))) {
      setErrorMessage(true);
    } else {
      onAddProduct(product);

      setProduct({
        product: "",
        value: 0,
      });
    }
  };


  return (
    <>
    <h2 className="text-white text-4xl font-bold text-center mb-7">Add your products</h2>
    <section className="formContainer max-w-md mx-auto p-4 bg-gray-800 rounded-md shadow-md mb-11">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="" className="text-lg font-semibold text-white">
          Product:
        </label>
        <br />
        <input
          type="text"
          placeholder="Product"
          onChange={handleProduct}
          value={product.product}
          className="w-full p-2 border rounded-md mt-1"
        />
        <br />
        <label htmlFor="" className="text-lg font-semibold mt-3 text-white">
          Value:
        </label>
        <br />
        <input
          type="text"
          placeholder="Value"
          onChange={handleValue}
          value={product.value}
          className="w-full p-2 border rounded-md mt-1"
        />
        {errorMessage && (
          <>
            <span className="text-red-500 text-sm mt-1">The input has been a number</span>
          </>
        )}
        <br />
        <button
          onClick={addProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3 hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </section>
    </>
  );
};
