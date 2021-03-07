import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../utils/firebase'

import './Header.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ user }) => (
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
      {user ? (
        <div className='option' onClick={(e) => auth.signOut()}>
          Sign out
        </div>
      ) : (
        <Link className='option' to='/auth'>
          Sign In
        </Link>
      )}
    </div>
  </div>
)

export default Header
