import { Switch, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Auth from './pages/Auth/Auth'

import Header from './components/Header/Header'

function App() {
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

export default App
