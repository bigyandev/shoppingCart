import React, {createContext, useContext} from 'react'

import SelectedItem from './SelectedItem'
import TotalPrice from './TotalPrice'
import datas from './ProductList.json'
import {DataProvider} from './PrdouctContext'
import {DisplayItem} from './DisplayItem.jsx'
import {useCart} from '../context/CartContext'

const CartPage = () => {

 
  
  return (
   
        
          <div className='container'>
            <SelectedItem />
            <TotalPrice />
          </div>
        
   
  )
}
export default CartPage
