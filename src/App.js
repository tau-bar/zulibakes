import React from 'react';
import logo from './logo.svg';
import './App.css';

// components
import HomePage from './pages/homepage/homepage.component';
import OrderPage from './pages/orderpage/orderpage.component';

// router
import { Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/order' component={OrderPage}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
