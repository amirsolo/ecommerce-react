// Action types
import {
  GOOGLE_SIGNIN_START,
  EMAIL_SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  CHECK_USER_SESSION
} from './user.types'

const INITIAL_STATE = {
  isUserLoading: false,
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  // console.log({ type, payload })

  switch (type) {
    case GOOGLE_SIGNIN_START:
    case EMAIL_SIGNIN_START:
    case CHECK_USER_SESSION:
      return {
        ...state,
        isUserLoading: true
      }
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isUserLoading: false,
        currentUser: payload,
        error: null
      }
    case SIGNIN_FAILURE:
      return {
        ...state,
        isUserLoading: false,
        currentUser: null,
        error: payload
      }
    default:
      return state
  }
}

export default userReducer
