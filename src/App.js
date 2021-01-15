import React from 'react';
import './App.css';

// components
import HomePage from './pages/homepage/homepage.component';
import OrderPage from './pages/orderpage/orderpage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';

// router
import { Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/order' component={OrderPage}/>
        <Route path='/about' component={AboutPage}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
