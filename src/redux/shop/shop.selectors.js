import { createSelector } from 'reselect'

const shopSelector = (state) => state.shop

export const collectionSelectors = createSelector(
  [shopSelector],
  (shop) => shop.collections
)
