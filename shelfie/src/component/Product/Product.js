import React from 'react';

const Product = (props) => {
    let id = props.id;
    return (
        <div>
            <p>Product Name: {props.name}</p>
            <p>Product Price: {props.price}</p>
            <p>Image URL: {props.image}</p>
            <button onClick={props.showEditButton}>Edit</button>
            <button onClick={() => props.deleteItem(id)}>Delete</button>
        </div>
    )
}
export default Product;