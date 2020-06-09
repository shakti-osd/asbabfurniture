import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import {addItem} from '../../actions/cartAction'
import ReactHtmlParser from 'react-html-parser';
import { useAlert, positions } from 'react-alert'
 
function ShopList(props) {
    const productUrl = '/product-details/';
    const product = props.product;
    
    const alert = useAlert();
    
    const addToCartHandler = (product) => {
        props.addItem(product);
        alert.show('Product Added to Cart Successfully!!!', { position: positions.MIDDLE,  type: 'success' })

    }

    // const addToWishlistHandler = (product) => {
    //     props.addWishlistItem(product);
    //     alert.show('Product Added to Wishlist Successfully!!!', { position: positions.MIDDLE,  type: 'success' })

    // }
    
    return (
        <>
           <div className="ht__list__product">
                <div className="ht__list__thumb">
                    <NavLink to={productUrl+product.id}><img src={product.image} alt={product.name} /></NavLink>
                </div>
                <div className="htc__list__details">
                    <h2><NavLink  to={productUrl+product.id}>{product.name}</NavLink></h2>
                    <ul  className="pro__prize">
                        <li className="old__prize">${product.price}</li>
                        <li className="new__prize">${ product.price - product.discount}</li>
                    </ul>
                    
                    <div><span>{ReactHtmlParser(product.features) || null}</span></div>
                    <div className="fr__list__btn">
                        <NavLink className="fr__btn" to="#" onClick={() => addToCartHandler(product)}>Add To Cart</NavLink>
                    </div>

                </div>
            </div>
		        					 
        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
  });

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShopList);