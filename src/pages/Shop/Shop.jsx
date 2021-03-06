import React from 'react'
import SHOP_DATA from './shop.data.js'

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    return (
      <div className='shop-page'>
        {this.state.collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    )
  }
}

export default Shop
