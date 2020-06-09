import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function BestSeller() {
    const productUrl = '/product-details/';

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productPath = process.env.NODE_ENV === 'production' ? '/products-server.js' : '/products.js';
		axios.get(productPath)
      .then(response => {
        const bestSellerProducts = response.data.results.filter(product => product.cat_slug === 'sofa-cum-beds');
		setProducts({products: bestSellerProducts});
      })
      .catch(err => console.log(err))
    }, []);

    const productArray = products.products || [];

    const productItems = productArray.map(product => {
        return (
            <div key={product.id} className="htc__best__product">
                <div className="htc__best__pro__thumb">
                <NavLink to={productUrl+product.id}><img src={product.image} alt={product.name} /></NavLink>
                </div>
                <div className="htc__best__product__details">
                    <h2><NavLink to={productUrl+product.id}>{ product.name }</NavLink></h2>                                            
                    <ul  className="pro__prize">
                        <li className="old__prize">${product.price}</li>
                        <li className="new__prize">${ product.price - product.discount}</li>
                    </ul>
                </div>
            </div>
        )
    })

    return (
        <>
            {productArray.length > 0 ? productItems : 'No Products Found'}
        </>
    )
}

export default BestSeller
