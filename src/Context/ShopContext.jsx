import React, { createContext } from 'react'
import all_product from '../Components/Assests/all_product'
import { useState } from 'react';
export const ShopContext = createContext(null);
const getDefaultCart = () =>{
        let cart = {};
        for(let index = 0; index < all_product.length+1; index++){
            cart[index] = 0;
        }
        return cart;
    }
const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems]  = useState(getDefaultCart());
    const addToCart = (id) =>{
        setCartItems((prev)=>({...prev,
            [id]:prev[id]+1
        }))
        console.log(cartItems);
    }
    const removeFromCart = (id) =>{
        setCartItems((prev)=>({...prev,
            [id]:prev[id]-1
        }))
    }
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => {
                    return product.id === Number(item);
                })
                if(itemInfo){
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = () =>{
        let totalItems = 0;
        for(const item in cartItems){
            totalItems += cartItems[item];
        }
        return totalItems;
    }
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;