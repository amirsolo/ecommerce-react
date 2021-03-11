import { createSelector } from 'reselect'

const selectCart = (state) => state.cart

export const cartVisibilitySelector = createSelector(
  [selectCart],
  (cart) => cart.isCartHidden
)

export const cartItemsSelector = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, item) => accumalatedQuantity + item.quantity,
      0
    )
)
