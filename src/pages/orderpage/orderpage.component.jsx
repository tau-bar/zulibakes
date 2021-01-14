import React, { Component } from 'react';
import './orderpage.styles.scss'
import Directory from '../../components/directory/directory.component';
import ProductItem from '../../components/product-item/product-item.component';

class OrderPage extends Component {
    constructor() {
        super();

        this.state = {
            favourites: [
                {
                    title: "Salted Caramel",
                    price: '4.00',
                    id: 10
                },
                {
                    title: "Nutella Red Velvet",
                    price: "4.00",
                    id : 11
                },
                {
                    title: "Chocolate Hazelnut",
                    price: "4.00",
                    id: 12  
                }

         ]
        }
    }

    render() {
        return(
            <div className = 'orderpage'>
        <div className = 'popular-picks'>
        <h1>Popular Picks</h1>
            <div className = 'popular-items'>
            {
                this.state.favourites.map(({ title, id, price }) => (
                    <ProductItem title = {title} key = {id} price = {price}/>
                ))
            }
            </div>
        </div>
        <div className = 'categories'>
            <h1>Categories</h1>
            <Directory/>
        </div>
        
    </div>
        )
    }
}
    

export default OrderPage;