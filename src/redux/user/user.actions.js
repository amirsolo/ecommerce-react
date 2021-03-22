// Action types
import {
  SET_CURRENT_USER,
  GOOGLE_SIGNIN_START,
  EMAIL_SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE
} from './user.types'

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
})

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
