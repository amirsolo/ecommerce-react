// Action types
import {
  SET_CURRENT_USER,
  // Sign in
  GOOGLE_SIGNIN_START,
  EMAIL_SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  // check user session
  CHECK_USER_SESSION,
  // Sign out
  SIGNOUT_START,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE
} from './user.types'

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
})

// ** Sign In **
export const googleSignInStart = () => ({
  type: GOOGLE_SIGNIN_START
})

export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGNIN_START,
  payload: emailAndPassword
})

export const signInSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: user
})

export const signInFailure = (error) => ({
  type: SIGNIN_FAILURE,
  payload: error
})

// ** User session **
export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
})

// ** Sign Out **
export const signOutStart = () => ({
  type: SIGNOUT_START
})

export const signOutSuccess = () => ({
  type: SIGNOUT_SUCCESS
})

export const signOutFailure = (error) => ({
  type: SIGNOUT_FAILURE,
  payload: error
})
