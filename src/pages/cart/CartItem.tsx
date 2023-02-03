import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import { ProductType } from '../../types/Product'

type Props = {
  data: ProductType
}

function CartItem(props: Props) {
  const {
    productName,
    category,
    description,
    productId,
    productImage,
    productPrice,
    quantity,
    rating,
  } = props.data

  const { cartItems, addToCart, removeFromCart, updateQuantity } = useContext(CartContext)
  const [itemQuantity, setItemQuantity] = useState(quantity)

  const handleChangeQuantity = () => {
    const item = cartItems?.find((product) => product.productId === productId)
    if (item) setItemQuantity(item?.quantity)
  }

  return (
    <div className='cartItem'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>${productPrice}</p>
        <div className='countHandler'>
          <button
            onClick={() => {
              removeFromCart!(props.data)
              handleChangeQuantity()
            }}
          >
            -
          </button>
          <input
            value={itemQuantity}
            onChange={(e) => {
              updateQuantity!(props.data, Number(e.currentTarget.value))
              handleChangeQuantity()
            }}
          />
          <button
            onClick={() => {
              addToCart!(props.data)
              handleChangeQuantity()
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
