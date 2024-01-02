import { createContext, useState } from "react"
import PropTypes from 'prop-types';

export const PurchaseContext = createContext();

export const PurchaseContextProvider = (props) => {

    const [ products, setProducts ] = useState([]);

    const addProduct = (newProduct) => {

        const productQuantity = parseInt(newProduct.productQuantity);
        const productValue = parseInt(newProduct.value) * productQuantity;

        setProducts([...products, {
            id: products.length+1,
            product: newProduct.product,
            quantity: productQuantity,
            value: productValue
        }])
    }

    const deleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId))
    }

    return (
        <PurchaseContext.Provider value={{
            products,
            onAddProduct: addProduct,
            onDeleteProduct: deleteProduct
        }}>
            {props.children}
        </PurchaseContext.Provider>
    )
}


PurchaseContextProvider.propTypes = {
    children: PropTypes.node
}