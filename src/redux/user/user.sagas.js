import { takeLatest, put, all, call } from 'redux-saga/effects'
import { GOOGLE_SIGNIN_START, EMAIL_SIGNIN_START } from './user.types'

import { signInSuccess, signInFailure } from './user.actions'

// Firebase utility functions
import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../utils/firebase'

export function* getSnapshopFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth)
    const userSnapshot = yield userRef.get()
    const userObj = { id: userSnapshot.id, ...userSnapshot.data() }

    yield put(signInSuccess(userObj))
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

// *** Sign In With Google ***
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshopFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

// *** Sign In With Email And Password ***
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshopFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error.message))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGNIN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGNIN_START, signInWithEmail)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}
