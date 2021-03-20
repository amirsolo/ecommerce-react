import React from 'react'
import { Route } from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../utils/firebase'

// pages
import Collection from '../Collection/Collection'

// components
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview'

class Shop extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
    })
  }

  render() {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)
