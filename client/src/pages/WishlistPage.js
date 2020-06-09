import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import {addItem, removeItem} from '../actions/cartAction'
import {addWishlistItem, removeWishlistItem} from '../actions/wishListAction';

import { FormattedMessage } from 'react-intl'

function head() {
    return (
      <Helmet>
        <title>Wishlist</title>
        <meta property="og:title" content="Wishlist" />
      </Helmet>
    );
  }

function WishlistPage(props) {
    const items = props.wishlist.wishlistItems;
    const { lang } = props.locale;
    
    const wishlistItems = items.map(item => {
        return (
            <tr key={item.id}>
                <td className="product-remove"><NavLink to="#" onClick={() => props.removeWishlistItem(item)}>x</NavLink></td>
                <td className="product-thumbnail"><NavLink to="#"><img src={item.image} alt={item.name} /></NavLink></td>
                <td className="product-name"><NavLink to="#">{item.name}</NavLink></td>
                <td className="product-price"><span className="amount">${item.price - item.discount}</span></td>
                <td className="product-stock-status"><span className="wishlist-in-stock">{item.status}</span></td>
                <td className="product-add-to-cart"><NavLink to="#" onClick={() => props.addItem(item)}> Add to Cart</NavLink></td>
            </tr>
        )
    })

    return (
        <>
        { head() }
        <div className="ht__bradcaump__area">
                <div className="ht__bradcaump__wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="bradcaump__inner">
                                    <nav className="bradcaump-inner">
                                    <NavLink className="breadcrumb-item" to="/"><FormattedMessage id="nav.home" defaultMessage="Home" /></NavLink>    
                                    <span className="brd-separetor"><i className="zmdi zmdi-chevron-right"></i></span>
                                    <span className="breadcrumb-item active"><FormattedMessage id="wishlist" defaultMessage="Wishlist" /></span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className="wishlist-area ptb--100 bg__white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="wishlist-content">
                            <form action="#">
                                <div className="wishlist-table table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="product-remove"><span class="nobr">Remove</span></th>
                                                <th class="product-thumbnail">Image</th>
                                                <th class="product-name"><span class="nobr">Product Name</span></th>
                                                <th class="product-price"><span class="nobr"> Unit Price </span></th>
                                                <th class="product-stock-stauts"><span class="nobr"> Stock Status </span></th>
                                                <th class="product-add-to-cart"><span class="nobr">Add To Cart</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {wishlistItems.length > 0 ? wishlistItems : 
                                            (<tr><td colSpan="6">{lang === 'en' ? 'No wishlist items exist' : 'Нет товаров в корзине'}</td></tr>)} 
                                            
                                        </tbody>
                                    </table>
                                </div>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


const mapStateToProps = state => ({
    cart: state.cart,
    wishlist: state.wishlist,
    locale: state.locale
  });

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addWishlistItem: item => dispatch(addWishlistItem(item)),
    removeWishlistItem: item => dispatch(removeWishlistItem(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(WishlistPage);