import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import {addItem} from '../../actions/cartAction'
import {addWishlistItem, removeWishlistItem} from '../../actions/wishListAction'
import { useAlert, positions } from 'react-alert'

function ShopGrid(props) {
    const productUrl = '/product-details/';
    const product = props.product;
    
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
            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
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
  )(ShopGrid);
