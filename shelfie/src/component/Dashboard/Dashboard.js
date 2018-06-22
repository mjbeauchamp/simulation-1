import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';


class Dashboard extends Component {

    deleteItem = (idNum) => {
        axios.delete('/api/product/' + idNum)
            .then(response => {
                console.log("Delete action successful!")
            })
            .catch(err => {
                console.log(err)
            })
        this.props.getProducts()
    }

    render(){
        console.log(this.props.inventory)

        let itemArr = [];
        this.props.inventory.forEach((val, index) => {
            let newItem = <Product deleteItem={this.deleteItem} showEditButton={this.props.showEditButton} showNewButton={this.props.showNewButton} key={index} name={val.product_name} price={val.product_price} image={val.image_url} id={val.product_id}/>
            itemArr.push(newItem)
        });
        return (
            <div>
                Dashboard
                {itemArr}
            </div>
        )
    }
}

export default Dashboard;