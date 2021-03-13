import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth, createUserProfileDocument } from './utils/firebase'
import './App.css'

// Redux
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import {
  currentUserSelector,
  isUserLoadingSelector
} from './redux/user/user.selectors'

// Pages
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Auth from './pages/Auth/Auth'
import Checkout from './pages/Checkout/Checkout'

// Components
import Header from './components/Header/Header'
import OverlaySpinner from './components/OverlaySpinner/OverlaySpinner'

class App extends React.Component {
  // initialized "firebase auth unsubscribe" function
  unsubscribeFromAuth = null

  // set logged in user
  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      // when user === null (e.g. on sign out)
      if (!user) {
        return setCurrentUser(user)
      }

      // Create user profile and update state with the user's data
      const userRef = await createUserProfileDocument(user)

      return userRef.onSnapshot((snapShot) => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      })
    })
  }

  // Close firebase auth subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser, isUserLoading } = this.props

    return (
      <div>
        {isUserLoading ? (
          <OverlaySpinner />
        ) : (
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/shop' component={Shop} />
              <Route exact path='/checkout' component={Checkout} />
              <Route
                path='/auth'
                render={() => (!currentUser ? <Auth /> : <Redirect to='/' />)}
              />
            </Switch>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  isUserLoading: isUserLoadingSelector
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
