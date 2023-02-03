import React, { createContext, useState } from 'react'
import { ProductType } from '../types/Product'

type CartContextType = {
  cartItems?: ProductType[]
  addToCart?: (product: ProductType) => void
  updateQuantity?: (product: ProductType, quantity: number) => void
  removeFromCart?: (product: ProductType) => void
  clearCart?: () => void
  cartTotal?: number
}

export const CartContext = createContext<CartContextType>({})

function CartContextProvider(props: any) {
  const [cartItems, setCartItems] = useState<ProductType[]>([])
  const [cartTotal, setCartTotal] = useState(0)

  const addToCart = (product: ProductType) => {
    let index = cartItems?.findIndex((item) => item.productId === product.productId)
    let items = cartItems
    if (index > -1) {
      cartItems[index].quantity += 1
    } else {
      product.quantity += 1
      items.push(product)
    }
    setCartItems(items)
    getTotalCartAmount()
  }

  const removeFromCart = (product: ProductType) => {
    let index = cartItems?.findIndex((item) => item.productId === product.productId)
    let items = cartItems
    if (cartItems[index].quantity === 1) {
      items.splice(index, 1)
    } else {
      items[index].quantity -= 1
    }
    setCartItems(items)
    getTotalCartAmount()
  }

  const updateQuantity = (product: ProductType, quantity: number) => {
    let index = cartItems?.findIndex((item) => item.productId === product.productId)
    let items = cartItems
    items[index].quantity = quantity
    setCartItems(items)
    getTotalCartAmount()
  }

  const clearCart = () => {
    setCartItems([])
    setCartTotal(0)
  }

  const getTotalCartAmount = () => {
    const total = cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0)
    setCartTotal(total)
  }

  const contextValue = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  }

  return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}

export default CartContextProvider
