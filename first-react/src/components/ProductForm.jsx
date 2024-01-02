import { useState } from "react";
// import PropTypes from "prop-types";
import { useContext } from "react";
import { PurchaseContext } from "../context/PurchaseContext";
import { BsDash, BsFillCartPlusFill, BsPlus  } from "react-icons/bs";


export const ProductForm = () => {

  const [quantity, setQuantity] = useState(0);

  const [product, setProduct] = useState({
    product: "",
    productQuantity: 0,
    value: 0,
  });

  const [errorMessage, setErrorMessage] = useState(false);

  const [ amountErrorMesage, setAmountErrorMesagge ] = useState(false);

  if(amountErrorMesage  && quantity > 0) {
    setAmountErrorMesagge(false);
  }

  const { onAddProduct } = useContext(PurchaseContext);

  const handleProduct = (e) =>
    setProduct({ ...product, product: e.target.value });
  const handleValue = (e) => {
    const newValue = e.target.value;

    if (newValue.trim() === "") {
      setErrorMessage(false);
    }

    setProduct({ ...product, value: newValue });
  };

  const handleClick = (status) => {
    if (status) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
      if (quantity === 0) {
        setQuantity(0);
      }
    }
  };

  const addProduct = () => {
    if(quantity == 0) {
      setAmountErrorMesagge(true);
    } else if (Number.isNaN(Number(product.value))) {
      setErrorMessage(true);
    } else {
      onAddProduct({
        ...product,
        productQuantity: quantity
      });

      setProduct({
        product: "",
        productQuantity: 0,
        value: 0,
      });

      setQuantity(0);
    }
  };

  return (
    <>
      <h2 className="text-white text-4xl font-bold text-center mb-7">
        Add your products
      </h2>
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
            className="w-full p-2 border rounded-md mt-1 mb-2"
          />
          <br />
          <label htmlFor="" className="text-lg font-semibold text-white">
            Amount:
          </label>
          <br />
          <div className="selectQuantity flex items-center space-x-4 mt-2 mb-2">
            <button
              onClick={() => handleClick(true)}
              className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-green-600"
            ><BsPlus /></button>
            <h5 className="text-white">{quantity}</h5>
            <button
              onClick={() => handleClick(false)}
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600"
            ><BsDash /></button>
          </div>
          {amountErrorMesage && (
            <>
              <span className="text-red-500 text-sm mt-1">
                The amount the quantity must be at least 1
              </span><br />
            </>
          )}
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
            style={errorMessage ? {outline: '2px solid red'} : {outline: 'none'}}
          />
          {errorMessage && (
            <>
              <span className="text-red-500 text-sm mt-1">
                The input has been a number
              </span>
            </>
          )}
          <br />
          <button
            onClick={addProduct}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3 hover:bg-blue-600 flex gap-3"
          >
            Add Product <BsFillCartPlusFill className="mt-1"/>
          </button>
        </form>
      </section>
    </>
  );
};
