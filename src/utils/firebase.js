import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAscvSIcndQoapGHl0CHvC-WdIJfvW_Rtw',
  authDomain: 'ecom-react-c526a.firebaseapp.com',
  projectId: 'ecom-react-c526a',
  storageBucket: 'ecom-react-c526a.appspot.com',
  messagingSenderId: '1075775416521',
  appId: '1:1075775416521:web:aae87c7c66efb35030c518'
}

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`/users/${userAuth.uid}`)

  const snapShot = await userRef.get()
  // Create user in DB if it doesn't exist
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = firebase.firestore.FieldValue.serverTimestamp()

    try {
      await userRef.set({
        email,
        displayName,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err)
    }
  }

  return userRef
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()

// google auth provider
const provider = new firebase.auth.GoogleAuthProvider()
// provider.setCustomParameters({ prompt: 'select_account' })
const signInWithGoogle = () => auth.signInWithPopup(provider)

export { auth, firestore, signInWithGoogle, createUserProfileDocument }
export default firebase
