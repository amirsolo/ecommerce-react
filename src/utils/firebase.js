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

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()

// google auth provider
const provider = new firebase.auth.GoogleAuthProvider()
// provider.setCustomParameters({ prompt: 'select_account' })
const signInWithGoogle = () => auth.signInWithPopup(provider)

export { auth, firestore, signInWithGoogle }
export default firebase
