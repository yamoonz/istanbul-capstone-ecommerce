import { MOCK_DATABASE } from "../../common/MockDatabase";
import React, { createContext, useReducer,useState } from 'react';
import { CartReducer, sumItems } from './CartReducer';
// const [Products, setProducts] = useState("");

export const CartContext = createContext()

// const previewItemsContainer = MOCK_DATABASE.filter((product) =>
//     product.tags.includes(Products)
//   )

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: storage, ...sumItems(storage), checkout: false };

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const increase = payload => {
        dispatch({type: 'INCREASE', payload})
    }

    const decrease = payload => {
        dispatch({type: 'DECREASE', payload})
    }

    const addProduct = payload => {
        dispatch({type: 'ADD_ITEM', payload})
    }

    

    const contextValues = {
        increase,
        decrease,
        ...state
    } 

    return ( 
        // {Products ? (

        //       {previewItemsProducts.length === 0
        //         ? Products
        //         : previewItemsContainer}

        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;