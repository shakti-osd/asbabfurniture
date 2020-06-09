import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import { connect } from 'react-redux'
import { addItem } from '../../actions/cartAction'
import {addWishlistItem, removeWishlistItem} from '../../actions/wishListAction'

import HorizontalGallery from 'react-dynamic-carousel'

import { useAlert, positions } from 'react-alert'

function ProductCrasual(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productPath = process.env.NODE_ENV === 'production' ? '/products-server.js' : '/products.js';
		axios.get(productPath)
      .then(response => {
        //console.log('All Mounted Products',response.data.results[0].parentcat[0].childcat[0].products);
        console.log('All Mounted Products',response.data.results);
        const productList = response.data.results;
       setProducts({products:productList})
       // this.setState({products: response.data.results})
      })
      .catch(err => console.log(err))
    },[]);

    const productItems = products.products || [];
    //console.log('productItems',productItems)
    //console.log('products',products.products)
    const productUrl = '/product-details/';


    const alert = useAlert();
    
    const addToCartHandler = (product) => {
        props.addItem(product);
        alert.show('Product Added to Cart Successfully!!!', { position: positions.MIDDLE,  type: 'success' })

    }

    const addToWishlistHandler = (product) => {
        props.addWishlistItem(product);
        alert.show('Product Added to Wishlist Successfully!!!', { position: positions.MIDDLE,  type: 'success' })

    }

    return (
        <>

        <HorizontalGallery
            tiles={productItems.map((product) => (
            <div className="product product__style--3 col-12">
            <div className="category">
                <div className="ht__cat__thumb">
                <NavLink  className="first__img" to={productUrl+product.id}>
                    <img src={product.image} alt={product.name} />
                </NavLink>
                </div>
                <div className="fr__hover__info">
                    <ul className="product__action">
                        <li><NavLink to="#" onClick={() => addToWishlistHandler(product)}><i className="icon-heart icons"></i></NavLink></li>

                        <li><NavLink to="#" className="cart" onClick={() => addToCartHandler(product)}><i className="icon-handbag icons"></i></NavLink></li>

                        <li><NavLink to="#"><i className="icon-shuffle icons"></i></NavLink></li>
                    </ul>
                </div>
                <div className="fr__product__inner">
                    <h4><NavLink  className="first__img" to={productUrl+product.id}>{product.name}</NavLink></h4>
                    <ul className="fr__pro__prize">
                        <li className="old__prize">${product.price}</li>
                        <li className="new__prize">${ product.price - product.discount}</li>
                    </ul>
                </div>
            </div>
        </div>

            ))}
            elementWidth={370}
            fadeDistance={1}
            minPadding={5}
        />


           		        					 
        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
  });

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    addWishlistItem: item => dispatch(addWishlistItem(item)),
    removeWishlistItem: item => dispatch(removeWishlistItem(item))
  });
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductCrasual);