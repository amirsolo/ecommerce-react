import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { auth, createUserProfileDocument } from './utils/firebase'

import './App.css'

// Pages
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Auth from './pages/Auth/Auth'

// Components
import Header from './components/Header/Header'
import OverlaySpinner from './components/OverlaySpinner/OverlaySpinner'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      authLoading: true,
      user: null
    }
  }

  // initialized firebase auth unsubscribe function
  unsubscribeFromAuth = null

  // set logged in user
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      // when user === null (e.g. on sign out)
      if (!user) {
        return this.setState({ user, authLoading: false })
      }

      // Create user profile and update state with the user's data
      const userRef = await createUserProfileDocument(user)

      return userRef.onSnapshot((snapShot) => {
        this.setState({
          user: {
            id: snapShot.id,
            ...snapShot.data()
          },
          authLoading: false
        })
      })
    })
  }

  // Close firebase auth subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { authLoading, user } = this.state

    return (
      <div>
        {authLoading ? (
          <OverlaySpinner />
        ) : (
          <div>
            <Header user={user} />
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

export default App
