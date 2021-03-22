// Action types
import {
  GOOGLE_SIGNIN_START,
  GOOGLE_SIGNIN_SUCCESS,
  GOOGLE_SIGNIN_FAILURE,
  EMAIL_SIGNIN_START,
  EMAIL_SIGNIN_SUCCESS,
  EMAIL_SIGNIN_FAILURE
} from './user.types'

const INITIAL_STATE = {
  isUserLoading: false,
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case GOOGLE_SIGNIN_START:
    case EMAIL_SIGNIN_START:
      return {
        ...state,
        isUserLoading: true
      }
    case GOOGLE_SIGNIN_SUCCESS:
    case EMAIL_SIGNIN_SUCCESS:
      return {
        ...state,
        isUserLoading: false,
        currentUser: payload,
        error: null
      }
    case GOOGLE_SIGNIN_FAILURE:
    case EMAIL_SIGNIN_FAILURE:
      return {
        ...state,
        isUserLoading: false,
        currentUser: null,
        error: null
      }
    default:
      return state
  }
}

export default userReducer
