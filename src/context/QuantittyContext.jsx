import React, { useContext, createContext, useState } from "react"

export const QtyContext = createContext(null)


export const QtyProvider = ({children}) => {
    const [productQty, setproductQty] = useState({})
     const incrementQty = (itemId) => {
       setproductQty((prevQty) => {
        const newQty = (prevQty[itemId] || 0) + 1;
        return {
            ...prevQty,
            [itemId]: newQty
        }
       })
    }
    const decrementQty = (itemId) => {
        setproductQty((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: Math.max(1, (prevQuantities[itemId] || 0) - 1),
          }));
    }
    return (
        <QtyContext.Provider value={{productQty, incrementQty, decrementQty}}>{children}</QtyContext.Provider>
    )

}
export const useQty = () => {
    return useContext(QtyContext)
}