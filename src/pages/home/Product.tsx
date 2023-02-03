import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import { ProductType } from '../../types/Product'

type Props = {
  data: ProductType
}

function Product({ data }: Props) {
  const { productName, productPrice, productImage, category, description, productId, rating } = data
  const { cartItems, addToCart } = useContext(CartContext)
  const [productQuantity, setProductQuantity] = useState(0)

  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>${productPrice}</p>
      </div>

      <button
        className='addToCartButton'
        onClick={() => {
          addToCart!(data)
          const quantity = cartItems?.find((item) => item.productId === productId)?.quantity
          if (quantity) setProductQuantity(quantity)
        }}
      >
        Add To Cart {productQuantity !== undefined && productQuantity > 0 && `(${productQuantity})`}
      </button>
    </div>
  )
}

export default Product
