import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const shopSelector = (state) => state.shop

export const collectionsSelectors = createSelector(
  [shopSelector],
  (shop) => shop.collections
)

export const collectionSelector = (collectionUrlParam) =>
  createSelector([collectionsSelectors], (collections) =>
    collections.find(
      (collection) => collection.routeName === collectionUrlParam
    )
  )
