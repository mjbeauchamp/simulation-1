import React from 'react';

const Product = (props) => {
    return (
        <div>
            <p>Product Name: {props.name}</p>
            <p>Product Price: {props.price}</p>
            <p>Image URL: {props.image}</p>
        </div>
    )
}
export default Product;