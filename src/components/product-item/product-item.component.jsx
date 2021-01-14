import React from 'react';
import './product-item.styles.scss';

const ProductItem = ({ title }) => (
    <div className = 'product-item'>
        <div className = 'product-image'>
            product image goes here
        </div>
        <div className ='product-button-desc'>
            <div className = 'product-desc'>
                <h4>{ title }</h4>
                <h6>Product description goes here</h6>
            </div>
            <div className = 'add-product'>
                <button>Add +</button>
            </div>
            
        </div>
    </div>
)

export default ProductItem;