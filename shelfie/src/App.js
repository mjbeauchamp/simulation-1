import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory: [],
      newItem: true
    }
    this.getProducts = this.getProducts.bind(this);
  }

  showEditButton = () => {
    this.setState({
        newItem: false
    })
  }

  showNewItemButton = () => {
    this.setState({
        newItem: true
    })
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts(){
    axios.get('/api/inventory')
      .then(data => {
        console.log(data)
        this.setState({
          inventory: data.data
        })
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    console.log(this.state.inventory)
    return (
      <div>
        <Form getProducts={this.getProducts} newItem={this.state.newItem} showNewItemButton={this.showNewItemButton}/>
        <Header />
        <Dashboard getProducts={this.getProducts} inventory={this.state.inventory} showEditButton={this.showEditButton} />
      </div>
    );
  }
}

export default App;
