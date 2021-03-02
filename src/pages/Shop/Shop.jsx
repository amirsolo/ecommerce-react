import React, { useState } from 'react'
import SHOP_DATA from './shop.data.js'

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA)
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  )
}

export default Shop
