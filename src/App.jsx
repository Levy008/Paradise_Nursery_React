import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage'
import ProductListingPage from './ProductListingPage'
import ShoppingCartPage from './ShoppingCartPage'
import { plants } from './plants'

function App() {
  const [activePage, setActivePage] = useState('landing')
  const [cartItems, setCartItems] = useState([])

  const handleGetStarted = () => {
    setActivePage('products')
  }

  const handleShowCart = () => {
    setActivePage('cart')
  }

  const handleShowLanding = () => {
    setActivePage('landing')
  }

  const handleShowProducts = () => {
    setActivePage('products')
  }

  const handleAddToCart = (plant) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === plant.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentItems, { ...plant, quantity: 1 }]
    })
  }

  const handleIncreaseQuantity = (plantId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === plantId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const handleDecreaseQuantity = (plantId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === plantId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const handleRemoveFromCart = (plantId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== plantId),
    )
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      {activePage === 'landing' && (
        <LandingPage onGetStarted={handleGetStarted} />
      )}

      {activePage === 'products' && (
        <ProductListingPage
          plants={plants}
          cartItems={cartItems}
          cartCount={cartCount}
          onAddToCart={handleAddToCart}
          onShowHome={handleShowLanding}
          onShowCart={handleShowCart}
        />
      )}

      {activePage === 'cart' && (
        <ShoppingCartPage
          cartItems={cartItems}
          cartCount={cartCount}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
          onRemoveFromCart={handleRemoveFromCart}
          onShowHome={handleShowLanding}
          onShowProducts={handleShowProducts}
        />
      )}
    </>
  )
}

export default App
