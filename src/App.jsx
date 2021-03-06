import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { auth } from './utils/firebase'

import './App.css'

// Pages
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Auth from './pages/Auth/Auth'

// Components
import Header from './components/Header/Header'

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ user, authLoading: false })
    })
  }

  // Close firebase auth subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <div>{this.state.authLoading ? 'loading...' : 'go it'}</div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route path='/auth' component={Auth} />
        </Switch>
      </div>
    )
  }
}

export default App
