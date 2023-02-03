import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30,
      cacheTime: 1000 * 60 * 10,
    },
  },
})

export const cartAPI = axios.create({ baseURL: 'https://fakestoreapi.com/' })
