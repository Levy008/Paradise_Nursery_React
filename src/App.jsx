import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import LandingPage from './LandingPage'
import ProductList from './ProductList'
import CartItem from './CartItem'
import { plants } from './plants'
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartCount,
  selectCartItems,
} from './CartSlice'

function App() {
  const [activePage, setActivePage] = useState('landing')
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartCount = useSelector(selectCartCount)

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

  return (
    <>
      {activePage === 'landing' && (
        <LandingPage onGetStarted={handleGetStarted} />
      )}

      {activePage === 'products' && (
        <ProductList
          plants={plants}
          cartItems={cartItems}
          cartCount={cartCount}
          onAddToCart={(plant) => dispatch(addToCart(plant))}
          onShowHome={handleShowLanding}
          onShowCart={handleShowCart}
        />
      )}

      {activePage === 'cart' && (
        <CartItem
          cartItems={cartItems}
          cartCount={cartCount}
          onIncreaseQuantity={(plantId) =>
            dispatch(increaseQuantity(plantId))
          }
          onDecreaseQuantity={(plantId) =>
            dispatch(decreaseQuantity(plantId))
          }
          onRemoveFromCart={(plantId) => dispatch(removeFromCart(plantId))}
          onShowHome={handleShowLanding}
          onShowProducts={handleShowProducts}
        />
      )}
    </>
  )
}

export default App
