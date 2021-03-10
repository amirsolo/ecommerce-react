// Action types
import { SET_CURRENT_USER } from './user.types'

const INITIAL_STATE = {
  isUserLoading: true,
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
        isUserLoading: false
      }
    default:
      return state
  }
}

export default userReducer
