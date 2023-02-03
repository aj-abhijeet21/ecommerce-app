import { useQuery } from '@tanstack/react-query'
import { cartAPI } from './client'

export function useGetAllProducts() {
  return useQuery({ queryFn: getAllProducts, queryKey: ['getAllProducts'] })
}

async function getAllProducts() {
  return cartAPI.get('products/').then((res) => res.data)
}
