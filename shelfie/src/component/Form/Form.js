import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            productName: '',
            productPrice: 0,
            imageURL: ''
        }
        this.cancel = this.cancel.bind(this);
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
                <button>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;