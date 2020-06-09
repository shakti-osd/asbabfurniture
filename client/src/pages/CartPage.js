import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl'
import {addItem, removeItem} from '../actions/cartAction'
import { useAlert, positions } from 'react-alert'


function head() {
    return (
      <Helmet>
        <title>Cart</title>
        <meta property="og:title" content="Cart" />
      </Helmet>
    );
  }

function Cart(props) {
    const items = props.cart.cartItems;
    const cartPriceTotal = items.reduce((prev, cur) => prev + (cur.price - cur.discount)*cur.quantity, 0);
    const { lang } = props.locale;

    const alert = useAlert();
    const removeCartHandler = (product) => {
        props.removeItem(product);
        alert.show('Item removed Successfully!!!', { position: positions.MIDDLE,  type: 'danger' })

    }

    const cartItems = items.map(item => {
        return (
            <tr key={item.id}>
                <td className="product-thumbnail"><NavLink to="#"><img src={item.image} alt={item.name} /></NavLink></td>
                <td className="product-name"><NavLink to="#">{item.name}</NavLink></td>
                <td className="product-price"><span className="amount">${item.price - item.discount}</span></td>
                <td className="product-quantity"><input type="number" value={item.quantity} readOnly/>
                    <span>
                        <NavLink to="#" className="plus" onClick={() => props.addItem(item)}>+</NavLink>
                        <NavLink to="#" className="minus" onClick={() => props.removeItem(item)}>-</NavLink>
                    </span>
                </td>
                <td className="product-subtotal">${(item.price - item.discount) * item.quantity}</td>
                <td className="product-remove"><NavLink to="#" onClick={() => removeCartHandler(item)}><i className="icon-trash icons"></i></NavLink></td>
            </tr>  
            
        )
    });

    
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
                                    <span className="breadcrumb-item active"><FormattedMessage id="shoppingcart" defaultMessage="Shopping cart" /></span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-main-area ptb--100 bg__white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <form action="#">               
                            <div className="table-content table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="product-thumbnail">products</th>
                                            <th className="product-name">name of products</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-subtotal">Total</th>
                                            <th className="product-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {cartItems.length > 0 ? cartItems : 
                                            (<tr><td colSpan="6">{lang === 'en' ? 'No cart items exist' : 'Нет товаров в корзине'}</td></tr>)}  
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="buttons-cart--inner">
                                        <div className="buttons-cart">
                                            <NavLink to="/">Continue Shopping</NavLink>
                                        </div>
                                        <div className="buttons-cart checkout--btn">                                            
                                            <NavLink to="/checkout">checkout</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <div className="ht__coupon__code">
                                        <span>enter your discount code</span>
                                        <div className="coupon__box">
                                            <input type="text" placeholder="" />
                                            <div className="ht__cp__btn">
                                                <NavLink to="#">enter</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12 smt-40 xmt-40">
                                    <div className="htc__cart__total">
                                        <h6>cart total</h6>
                                        <div className="cart__desk__list">
                                            <ul className="cart__desc">
                                                <li>cart total</li>
                                                <li>tax</li>
                                                <li>shipping</li>
                                            </ul>
                                            <ul className="cart__price">
                                                <li>${cartPriceTotal}.00</li>
                                                <li>$9.00</li>
                                                <li>0</li>
                                            </ul>
                                        </div>
                                        <div className="cart__total">
                                            <span>order total</span>
                                            <span>${cartPriceTotal + 9 }.00</span>
                                        </div>
                                        <ul className="payment__btn">
                                            <li className="active"><NavLink to="/checkout">payment</NavLink></li>
                                            <li><NavLink to="/">continue shopping</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>


        
        </>
    )
}


const mapStateToProps = state => ({
    cart: state.cart,
    locale: state.locale
  });

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart);