import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.find((cartItem) => cartItem.id === action.payload)

      if (item) {
        item.quantity += 1
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((cartItem) => cartItem.id === action.payload)

      if (item) {
        item.quantity -= 1
      }

      return state.filter((cartItem) => cartItem.quantity > 0)
    },
    removeFromCart: (state, action) =>
      state.filter((cartItem) => cartItem.id !== action.payload),
  },
})

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions

export const selectCartItems = (state) => state.cart
export const selectCartCount = (state) =>
  state.cart.reduce((total, item) => total + item.quantity, 0)
export const selectCartTotal = (state) =>
  state.cart.reduce((total, item) => total + item.price * item.quantity, 0)

export default cartSlice.reducer
