import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

// Pages
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Auth from './pages/Auth/Auth'

// Components
import Header from './components/Header/Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
