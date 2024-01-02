// import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { PurchaseCard } from "./PurchaseCard";
import { useContext } from "react";
import { PurchaseContext } from "../context/PurchaseContext";

export const PurchaseResume = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const { products } = useContext(PurchaseContext);

  useEffect(() => {
    const temporalSubtotal = products.reduce((acc, product) => acc + product.value, 0);
    setSubtotal(temporalSubtotal);
  }, [products]);

  useEffect(() => {
    setTotal(subtotal + subtotal * 0.19);
  }, [subtotal]);

  if(products.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No products to show</h1>
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 p-5">
        {products.map((product, index) => (
          <div key={index} className="px-4">
            <PurchaseCard product={product} />
          </div>
        ))}
      </div>
      <div className="totals bg-gray-800 text-white p-7 rounded shadow-md mx-auto mr-10" style={{
        marginLeft: '40px'
      }}>
        <span className="text-lg font-semibold">Subtotal: ${subtotal}</span>
        <br />
        <span className="text-lg font-semibold">Total: ${total.toFixed(2)}</span>
      </div>
    </>
  );
};

