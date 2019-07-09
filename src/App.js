import React from 'react';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Admin from './components/Admin';
import BandsList from './components/BandsList';
import MerchList from './components/MerchList';
import AddProduct from './components/AddProduct';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/bands' component={BandsList}/>
          <Route exact path='/shop' component={MerchList}/>
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/addproduct' component={AddProduct}/>
        </Switch>

    </div>
  );
}

export default App;
