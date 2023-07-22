
import React, { useState } from "react"
import { useContext } from "react"
import ProductContext from "./PrdouctContext"



const SelectedItem = () => {
    const style = {
        width: "45%",
        height: "80%",
        overflowY: "scroll",
        border: "3px solid black",
        overflowX:"hidden",
        
    }
    const datas = useContext(ProductContext)
    console.log(datas)

    
 return (
    
    <>
    <div style={style}>
    <h1>hello world</h1>
    
    
    </div>
    </>
)
}
export default SelectedItem