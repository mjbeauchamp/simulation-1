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
      inventory: []
    }
    this.getProducts = this.getProducts.bind(this);
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
        <Form getProducts={this.getProducts} />
        <Header />
        <Dashboard getProducts={this.getProducts} inventory={this.state.inventory} />
      </div>
    );
  }
}

export default App;
