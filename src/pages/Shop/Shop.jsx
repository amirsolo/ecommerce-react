import React from 'react'
import { Route } from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

// pages
import CollectionContainer from '../Collection/Collection.container'
// components
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionsOverview.container'

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props

    // Fetch collections from DB
    fetchCollectionsStart()
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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop)
