import { TOGGLE_CART_VISIBILITY } from './cart.types'

const INITIAL_STATE = {
  isCartHidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        isCartHidden: !state.isCartHidden
      }
    default:
      return state
  }
}

export default cartReducer
