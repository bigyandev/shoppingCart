import React from "react"
import { useParams } from "react-router-dom"
import data from "./ProductList.json"



const ProductDetail = () => {
    const {id} = useParams()
   
    
    return (
        <>
        {data && data.map((dat) => dat.name === id ? (
             <div className="container" >
                <div className="card"  key={dat.id}>
                  <img className="image" src={dat.image}  alt={dat.name}/>
                  <div className="datalist">
                     <h2>{dat.name}</h2>
                     <h3>${dat.price}</h3>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sint aliquam ipsam consequatur non explicabo quis saepe? Ipsam, esse? Quibusdam nisi, 
                        </p>
                  </div>
                </div>
             </div>
        )

         : null)}
        </>
    )
    
    
}
export default ProductDetail