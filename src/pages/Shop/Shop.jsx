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
import WithSpinner from '../../components/WithSpinner/WithSpinner'

// with spinner components
const CollectionWithSpinner = WithSpinner(Collection)
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)

class Shop extends React.Component {
  state = {
    isLoading: true
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    fetch(
      'https://firestore.googleapis.com/v1/projects/ecom-react-c526a/databases/(default)/documents/collections'
    )
      .then((res) => res.json())
      .then((data) => console.log({ data }))

    collectionRef.get().then((snapshot) => {
      // Convert fetched array to map
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)

      // update state with fetech data
      updateCollections(collectionsMap)

      // set loading state to false
      this.setState({ isLoading: false })
    })
  }

  componentWillUnmount() {
    // this.unsubscribeFromSnapshot()
  }

  render() {
    const { match } = this.props
    const { isLoading } = this.state
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)
