import React, { createContext }  from "react";
import datas from "./ProductList.json"
const ProductContext = createContext(null)
export const DataProvider = (props) => {
    return (
        <>
        <ProductContext.Provider  value={datas} >
            {props.children}
        </ProductContext.Provider>
        </>
    )
}
export default ProductContext