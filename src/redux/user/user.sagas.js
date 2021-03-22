import { takeLatest, put, all, call } from 'redux-saga/effects'
import { GOOGLE_SIGNIN_START } from './user.types'

import { googleSignInSuccess, googleSignInFailure } from './user.actions'

// Firebase utility functions
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../utils/firebase'

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDocument, user)
    const userSnapshot = yield userRef.get()
    const userObj = { id: userSnapshot.id, ...userSnapshot.data() }

    yield put(googleSignInSuccess(userObj))
  } catch (error) {
    yield put(googleSignInFailure(error.message))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGNIN_START, signInWithGoogle)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)])
}
