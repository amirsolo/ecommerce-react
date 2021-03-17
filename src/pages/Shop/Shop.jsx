import React from 'react'
import { Route } from 'react-router-dom'

// pages
import Collection from '../Collection/Collection'

// components
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview'

const Shop = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  )
}

export default Shop
