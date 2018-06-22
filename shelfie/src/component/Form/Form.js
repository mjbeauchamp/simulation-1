import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            productName: '',
            productPrice: 0,
            imageURL: '',
            selectedProduct: null,
            newItem: true
        }
        this.cancel = this.cancel.bind(this);
        this.createItem = this.createItem.bind(this);
    }

    componentDidUpdate(oldProps){
        if(oldProps.chosenProduct !== this.props.chosenProduct){
          this.setState({
              selectedProduct: this.props.chosenProduct,
              newItem: false
          })
        }
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
        let updateButton;
        if(this.state.newItem){
            updateButton = <button onClick={this.createItem}>Add to Inventory</button>
        } else {
            updateButton = <button onClick={this.props.showNewItemButton} >Save Changes</button>
        }
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
                {updateButton}
            </div>
        )
    }
}

export default Form;