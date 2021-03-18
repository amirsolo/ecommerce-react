import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// }

const shopSelector = (state) => state.shop

export const collectionsSelectors = createSelector(
  [shopSelector],
  (shop) => shop.collections
)

export const collectionsForPreviewSelector = createSelector(
  [collectionsSelectors],
  (collections) => Object.keys(collections).map((key) => collections[key])
)

export const collectionSelector = memoize((collectionUrlParam) =>
  createSelector(
    [collectionsSelectors],
    (collections) => collections[collectionUrlParam]
  )
)
