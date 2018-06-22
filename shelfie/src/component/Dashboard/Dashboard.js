import React, {Component} from 'react';
import Product from '../Product/Product';


class Dashboard extends Component {
    deleteItem = () => {
        
    }

    render(){
        console.log(this.props.inventory)

        let itemArr = [];
        this.props.inventory.forEach((val, index) => {
            let newItem = <Product key={index} name={val.product_name} price={val.product_price} image={val.image_url}/>
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