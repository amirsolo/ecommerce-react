import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { isCollectionFetchingSelector } from '../../redux/shop/shop.selectors'
import WithSpinner from '../WithSpinner/WithSpinner'
import CollectionOverview from './CollectionOverview'

const mapStateToProps = createStructuredSelector({
  isLoading: isCollectionFetchingSelector
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)

export default CollectionsOverviewContainer
