import { TOGGLE_CART_VISIBILITY, ADD_ITEM_TO_CART } from './cart.types'
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
  isCartHidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        isCartHidden: !state.isCartHidden
      }
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      }
    default:
      return state
  }
}

export default cartReducer
