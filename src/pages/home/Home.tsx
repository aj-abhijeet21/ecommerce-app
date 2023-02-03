import React, { useEffect, useState } from 'react'
import { useGetAllProducts } from '../../queries/shop'
import { ProductType } from '../../types/Product'
import Product from './Product'
import './Home.css'

function Home() {
  const { data, isFetched } = useGetAllProducts()

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    if (isFetched) {
      let response: ProductType[] = data.map((item: any) => {
        return {
          productName: item.title,
          productPrice: item.price,
          productImage: item.image,
          category: item.category,
          description: item.description,
          productId: item.id,
          rating: item.rating.rate,
          quantity: 0,
        }
      })

      setProducts(response)
    }
  }, [data])

  return (
    <div className='shop'>
      <div>
        <h1>E-commerce Shop</h1>
      </div>
      {isFetched && (
        <div className='products'>
          {products.map((product) => (
            <Product data={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
