import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import './App.css'

const Hat = () => {
  return <div>HAT PAGE</div>
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/hats' component={Hat} />
      </Switch>
    </div>
  )
}

export default App
