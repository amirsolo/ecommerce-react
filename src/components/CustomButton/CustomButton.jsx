import React from 'react'

import './CustomButton.scss'

const CustomButton = ({ children, googleSignIn, inverted, ...otherProps }) => {
  // Button types
  const isInverted = inverted ? 'inverted' : ''
  const isGoogleSignIn = googleSignIn ? 'google-sign-in' : ''

  return (
    <button
      className={`${isInverted} ${isGoogleSignIn} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
