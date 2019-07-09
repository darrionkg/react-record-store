import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import BandsList from './components/BandsList';
import NewProductForm from './components/NewProductForm';
import MerchList from './components/MerchList';

function App() {
  return (
    <div className="App">
      <Nav />
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/bands' component={BandsList}/>
          <Route exact path='/newproduct' component={NewProductForm}/>
          <Route exact path='/merchlist' component={MerchList}/>
        </Switch>

    </div>
  );
}

export default App;
