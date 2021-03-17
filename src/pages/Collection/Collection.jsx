import React from 'react'

import { connect } from 'react-redux'
import { collectionSelector } from '../../redux/shop/shop.selectors'

// components
// import CollectionItem from '../../components/CollectionItem/CollectionItem'

import './Collection.scss'

const Category = ({ collection }) => {
  return (
    <div className='category'>
      <h1>Category Page :)</h1>
      <h2>{collection.title} page</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: collectionSelector(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Category)
