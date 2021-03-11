import { TOGGLE_CART_VISIBILITY, ADD_ITEM_TO_CART } from './cart.types'

export const toggleCartVisibility = () => ({
  type: TOGGLE_CART_VISIBILITY
})

export const addItem = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item
})
