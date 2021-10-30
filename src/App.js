import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as Routes from './constants/routes';

const App = () => {
  return (
   <Router>
     <Route exact path={Routes.BROWSE}><Browse /></Route>
     <Route exact path={Routes.SIGN_IN}><Signin /></Route>
     <Route exact path={Routes.SIGN_UP}><Signup /></Route>
     <Route exact path={Routes.HOME}><Home /></Route>
   </Router>  
  );
};

export default App;
