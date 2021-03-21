import React from 'react'
import { Route } from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import { fetchCollections } from '../../redux/shop/shop.actions'

// pages
import CollectionContainer from '../Collection/Collection.container'
// components
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionsOverview.container'

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollections } = this.props

    // Fetch collections from DB
    fetchCollections()
  }

  render() {
    const { match } = this.props

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections())
})

export default connect(null, mapDispatchToProps)(Shop)
