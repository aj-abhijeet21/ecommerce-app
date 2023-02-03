import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import CartItem from './CartItem'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext)
  const total = cartTotal
  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      {cartItems && cartItems.length > 0 && (
        <div className='cartItems'>
          {cartItems?.map((product) => (
            <CartItem data={product} />
          ))}
        </div>
      )}

      <div className='checkout'>
        <p>Subtotal: ${total}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button
          onClick={() => {
            alert(`Please pay $${total} to checkout!`)
            clearCart!()
            navigate('/')
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
