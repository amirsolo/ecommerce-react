// Action types
import {
  SET_CURRENT_USER,
  GOOGLE_SIGNIN_START,
  GOOGLE_SIGNIN_SUCCESS,
  GOOGLE_SIGNIN_FAILURE,
  EMAIL_SIGNIN_START,
  EMAIL_SIGNIN_SUCCESS,
  EMAIL_SIGNIN_FAILURE
} from './user.types'

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
})

// ** Google Sign In **
export const googleSignInStart = () => ({
  type: GOOGLE_SIGNIN_START
})

export const googleSignInSuccess = (user) => ({
  type: GOOGLE_SIGNIN_SUCCESS,
  payload: user
})

export const googleSignInFailure = (error) => ({
  type: GOOGLE_SIGNIN_FAILURE,
  payload: error
})

// ** Email & Password Sign In **
export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGNIN_START,
  payload: emailAndPassword
})

export const emailSignInSuccess = (user) => ({
  type: EMAIL_SIGNIN_SUCCESS,
  payload: user
})

export const emailSignInFailure = (error) => ({
  type: EMAIL_SIGNIN_FAILURE,
  payload: error
})
