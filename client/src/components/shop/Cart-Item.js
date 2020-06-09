import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { useAlert, positions } from 'react-alert'
import {removeItem} from '../../actions/cartAction'

function CartItem(props) {
    //console.log('CartItems',props.products)
    const alert = useAlert();
    const removeCartHandler = (product) => {
        props.removeItem(product);
        alert.show('Item removed Successfully!!!', { position: positions.MIDDLE,  type: 'danger' })

    }

    const cartPriceTotal = props.cart.cartItems.reduce((prev, cur) => prev + (cur.price -cur.discount)*cur.quantity, 0);
    const allItems = props.products;
   
    const miniCartItems = allItems.map(item => {
        return (
            <div  key={item.id} className="shp__single__product">
                <div className="shp__pro__thumb">
                    <NavLink to="/"><img src={item.image} alt={item.name} /></NavLink>
                </div>
                <div className="shp__pro__details">
                    <h2><NavLink to="/">{item.name}</NavLink></h2>
                    <span className="quantity">QTY: {item.quantity}</span>
                    <span className="shp__price">${(item.price - item.discount) * item.quantity}</span>
                </div>
                <div className="remove__btn">
                    <NavLink to="#" onClick={() => removeCartHandler(item)}><i className="zmdi zmdi-close"></i></NavLink>
                </div>
            </div>            
        )
    });

    

    return (
        <>
            <div className="offsetmenu__close__btn">
                        <NavLink to="#"  onClick={props.toggleCart}><i className="zmdi zmdi-close"></i></NavLink>
            </div>
            <div className="shp__cart__wrap">
                 {(allItems.length > 0) ? miniCartItems : 'No cart items exist'}
                <ul className="shoping__total">
                        <li className="subtotal">Subtotal:</li>
                        <li className="total__price">${cartPriceTotal}</li>
                </ul>
                 <ul className="shopping__btn">
                    <li><NavLink to="/cart">View Cart</NavLink></li>
                    <li className="shp__checkout"><NavLink to="/checkout">Checkout</NavLink></li>
                </ul>
            </div>

        </>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
  });

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartItem);