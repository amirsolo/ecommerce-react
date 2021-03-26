import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'

// Redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  currentUserSelector,
  isUserLoadingSelector
} from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

// Pages
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Auth from './pages/Auth/Auth'
import Checkout from './pages/Checkout/Checkout'

// Components
import Header from './components/Header/Header'
import OverlaySpinner from './components/OverlaySpinner/OverlaySpinner'

const App = ({ isUserLoading, currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      {isUserLoading ? (
        <OverlaySpinner />
      ) : (
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route
              exact
              path='/auth'
              render={() => (!currentUser ? <Auth /> : <Redirect to='/' />)}
            />
          </Switch>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  isUserLoading: isUserLoadingSelector
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
