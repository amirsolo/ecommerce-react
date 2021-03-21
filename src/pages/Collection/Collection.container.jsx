import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { isCollectionsLoadedSelector } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/WithSpinner/WithSpinner'
import Collection from './Collection'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !isCollectionsLoadedSelector(state)
})

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection)

export default CollectionContainer
