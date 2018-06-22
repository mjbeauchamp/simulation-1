import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            productName: '',
            productPrice: 0,
            imageURL: ''
        }
        this.cancel = this.cancel.bind(this);
        this.createItem = this.createItem.bind(this);
    }

    updateName(e){
        this.setState({
            productName: e.target.value
        })
    }

    updatePrice(e){
        this.setState({
            productPrice: e.target.value
        })
    }

    updateImage(e){
        this.setState({
            imageURL: e.target.value
        })
    }

    cancel(){
        this.setState({
            productName: '',
            productPrice: 0,
            imageURL: ''
        })
    }

    createItem(){
        let name = this.state.productName;
        let price = this.state.productPrice;
        let image = this.state.imageURL;
        console.log(name, price, image, this.props.getProducts)
        axios.post('/api/product', {name, price, image}).then(data => {
            this.props.getProducts();
            this.cancel();
        }).catch(err => {
            console.log(err)
        });
    }

    render(){
        console.log(this.state.productPrice)
        console.log(this.state.productName)
        console.log(this.state.imageURL)
        return (
            <div>
                Form
                <input 
                    className='product-name' 
                    type="text" 
                    value={this.state.productName}
                    onChange={(e) => this.updateName(e)}
                    placeholder="Product Name"/>
                <input 
                    className='product-price' 
                    value={this.state.productPrice} 
                    type="text" 
                    onChange={(e) => this.updatePrice(e)}
                    placeholder="Product Price"/>
                <input 
                    className='image-url' 
                    value={this.state.imageURL} 
                    type="text" 
                    onChange={(e) => this.updateImage(e)}
                    placeholder="Image URL"/>
                <button onClick={this.cancel}>Cancel</button>
                <button onClick={this.createItem}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;