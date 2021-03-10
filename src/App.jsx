import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { auth, createUserProfileDocument } from './utils/firebase'
import './App.css'

// Redux
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

// Pages
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Auth from './pages/Auth/Auth'

// Components
import Header from './components/Header/Header'
import OverlaySpinner from './components/OverlaySpinner/OverlaySpinner'

class App extends React.Component {
  // initialized firebase auth unsubscribe function
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
    const { isUserLoading } = this.props

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
              <Route path='/auth' component={Auth} />
            </Switch>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isUserLoading: state.user.isUserLoading
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
