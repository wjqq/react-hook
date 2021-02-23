import React from 'react';
import RefHook from './ref/RefHook'
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom'

const Home = ()=>{
  return (
  <div>
    <Link to="/use-ref">1 - Learning useRef Hook</Link>
  </div>);
}

const App = ()=> {

  return (
    <Router>
      <Switch>
      <Route path="/use-ref"><RefHook /></Route>
      <Route exact path="/">
        <Home />
      </Route>
        
        
        
      </Switch>
    </Router>
    
  )
}

export default App;
