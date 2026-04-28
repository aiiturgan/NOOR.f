import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    const item = cart.find(
      item => item.id === product.id && item.size === product.size
    )

    if (item) {
      setCart(cart.map(cartItem =>
        cartItem.id === product.id && cartItem.size === product.size
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ))
    } else {
      setCart([...cart, { ...product, count: 1 }])
    }
  }

  const removeFromCart = (id, size) => {
    setCart(cart.filter(item => !(item.id === id && item.size === size)))
  }

  const plusCount = (id, size) => {
    setCart(cart.map(item =>
      item.id === id && item.size === size
        ? { ...item, count: item.count + 1 }
        : item
    ))
  }

  const minusCount = (id, size) => {
    setCart(cart.map(item =>
      item.id === id && item.size === size && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item
    ))
  }

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              plusCount={plusCount}
              minusCount={minusCount}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App