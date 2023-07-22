import React, {createContext, useContext} from 'react'

import SelectedItem from './SelectedItem'
import TotalPrice from './TotalPrice'
import datas from './ProductList.json'
import {DataProvider} from './PrdouctContext'
import {DisplayItem} from './DisplayItem.jsx'
import {useCart} from '../context/CartContext'

const CartPage = () => {

  const {cartProducts} = useCart();
  console.log({cartProducts})
  
  return (
    <>
        {/* <DisplayItem>
          <SelectedItem />
          <TotalPrice />
        </DisplayItem> */}
              <div className='container'>
        {cartProducts &&
          cartProducts.map((data) => {  
            return (
              <div className='card' key={data.id}>
                <img src={data.image} alt={data.name} />
                <div className='datalist'>
                  <h2>{data.name}</h2>
                  <h3>${data.price}</h3>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}
export default CartPage
