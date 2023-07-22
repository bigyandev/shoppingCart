import React from "react";
import { useState, useContext, createContext } from "react";
import ProductContext from "./PrdouctContext";
import SelectedItemContext from "./SelectedItemContext.jsx";


export const DisplayItemContext = createContext(null);
export const DisplayItem = (props) => {
    const datas = useContext(ProductContext)
    const [product, setProduct] = useState(datas);
    
    const handleClick = (id) => {
        
   
     setProduct((product) => {
       return product.map((prevItem) => {
        if(prevItem.id === id) {
            return {...prevItem, isAdded: true};
        }
        else {
            return prevItem;
        }
       })
     })
    }
    console.log(product)
    
    return (
        <>
      <DisplayItemContext.Provider value={product}>
        {props.children}
      </DisplayItemContext.Provider>
        <div className="container">
        {datas && datas.map((data) => {
           return <div className="card" key={data.id}>
               <img src={data.image}  alt={data.name}/>
               <div className="datalist">
                <h2>{data.name}</h2>
                <h3>${data.price}</h3>
                <button onClick={() => handleClick(data.id)}>
                {data.isAdded ? "ADDED": "ADD TO CART"}
                </button>
                </div>
                
                </div>

           
        }
        
        )}
        </div>
        
        </>
    )
        
    
}
