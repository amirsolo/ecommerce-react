import React from 'react'

// Redux
import { connect } from 'react-redux'
import { toggleCartVisibility } from '../../redux/cart/cart.actions'

// Components
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './CartIcon.scss'

const CartIcon = ({ toggleCartVisibility }) => (
  <div className='cart-icon' onClick={toggleCartVisibility}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
})

export default connect(null, mapDispatchToProps)(CartIcon)