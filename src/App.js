import React from 'react'
import Login from './Auth/Login'
import Signin from './Auth/Signin'
import Main from './Components/Pages/Main'
import Products from './Components/Pages/Products'
import Clients from './Components/Pages/Clients'
import Rendimiento from './Components/Pages/Rendimiento'
import SocialMedia from './Components/Pages/SocialMedia'
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Switch>    
        <Route exact path='/' component={Login}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/main' component={Main}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/clients' component={Clients}/>
        <Route exact path='/rendimiento' component={Rendimiento}/>
        <Route exact path='/media' component={SocialMedia}/>
      </Switch>
    </Router>
  );
}

export default App;
