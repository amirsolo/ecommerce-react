import { Switch, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  )
}

export default App
