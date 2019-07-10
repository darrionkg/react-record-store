import React from 'react';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Admin from './components/Admin';
import BandsList from './components/BandsList';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterList: []
    };
    this.handleAddingNewProductToList = this.handleAddingNewProductToList.bind(this);
  }

  handleAddingNewProductToList(newProduct){
    var newMasterList = this.state.masterList.slice();
    newMasterList.push(newProduct);
    this.setState({masterList: newMasterList});
  }
  
  render(){
    return (
      <div className="App">
        <Nav />
          <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/bands' component={BandsList}/>
            <Route exact path='/shop' render={()=><ProductList productList={this.state.masterList} />} />
            <Route exact path='/admin' component={Admin}/>
            <Route exact path='/addproduct' render={() => <AddProduct onNewProductCreation={this.handleAddingNewProductToList} />}/>
          </Switch>
      </div>
    );
  } 
}

export default App;
