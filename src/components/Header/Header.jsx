import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../utils/firebase'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { cartVisibilitySelector } from '../../redux/cart/cart.selectors'
import { currentUserSelector } from '../../redux/user/user.selectors'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'

import './Header.scss'

const Header = ({ currentUser, isCartHidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={(e) => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link className='option' to='/auth'>
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {!isCartHidden ? <CartDropdown /> : null}
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  isCartHidden: cartVisibilitySelector
})

export default connect(mapStateToProps)(Header)
