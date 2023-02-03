import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import { queryClient } from './queries/client'
import './App.css'
import CartContextProvider from './context/CartContextProvider'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <div className='App'>
          <Router>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Router>
        </div>
      </CartContextProvider>
    </QueryClientProvider>
  )
}

export default App
