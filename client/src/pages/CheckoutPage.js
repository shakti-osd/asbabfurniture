import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { removeItem } from '../actions/cartAction'
//import Login from '../components/auth/Login'
//import Address from '../components/shop/Address'
import { FormattedMessage } from 'react-intl'
import StripeButtonCheckout from '../components/shop/StripeButtonCheckout';

function head() {
    return (
      <Helmet>
        <title>Checkout</title>
        <meta property="og:title" content="Checkout" />
      </Helmet>
    );
  }

function CheckoutPage(props) {
	//const { lang } = props.locale;
	  
    // toggle Login Form
	// const [loginToggle, setLoginToggle] = useState({addClass:false})	
	// const toggleLogin = () => {
	// 	setLoginToggle({addClass:!loginToggle.addClass})
    // }
    
    // var loginClass = ["checkout_login"];	
	
	// if(loginToggle.addClass) {
	// 	loginClass.push('show');
    // }
    
    // toggle Coupon Form
	// const [couponToggle, setCouponToggle] = useState({addClass:false})	
	// const toggleCoupon = () => {
	// 	setCouponToggle({addClass:!couponToggle.addClass})
    // }
    
    // var couponClass = ["checkout_coupon"];	
	
	// if(couponToggle.addClass) {
	// 	couponClass.push('show');
	// }

	// Check Loggedin User
	// var loggedIn = ["checkout_info"];
	// if(props.auth.isAuthenticated){
	// 	loggedIn.push('hide')
	// }

	

	// Cart Items
	const items = props.cart.cartItems;
	// Check item in cart
	if(items.length === 0){
		props.history.push('/shop')
	}

	const cartPriceTotal = items.reduce((prev, cur) => prev + cur.price*cur.quantity, 0);
	


    const cartItems = items.map(item => {
        return (
            
            <div className="single-item" key={item.id}>
                <div className="single-item__thumb">
                    <img src={item.image} alt="ordered item" />
                </div>
                <div className="single-item__content">
                    <NavLink to="#">{item.name}</NavLink>
                    <span className="item-quantity">${item.price} × {item.quantity} = ${item.price * item.quantity}</span>
                </div>
                <div className="single-item__remove">
                    <NavLink to="#" onClick={() => props.removeItem(item)}><i className="zmdi zmdi-delete"></i></NavLink>
                </div>
            </div>
                   
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
                                    <span className="breadcrumb-item active">Checkout</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="checkout-wrap ptb--100">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="checkout__inner">
                            <div className="accordion-list">
                                <div className="accordion">
                                    <div className="accordion__title">
                                        Checkout Method
                                    </div>
                                    <div className="accordion__body">
                                        <div className="accordion__body__form">
                                            <div className="row">
                                            <div className="col-md-7">
                                                    <div className="checkout-method">
                                                        <div className="payment">
                                                    <div className="che__header" role="tab" id="headingOne">
                                                        <div className="checkout__title">
                                                            <h3>Stripe Payment</h3>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                                        <div className='test-warning'>
                                                            *Please use the following test credit card for payments*
                                                            <br />
                                                            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123 {props.auth.user.id} 
                                                        </div>	
                                                        <StripeButtonCheckout price={cartPriceTotal + 9} userid={props.auth.user.id} />
                                                    </div>
                                                </div>    
                                                    </div>
                                            </div>                                            
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="order-details">
                            <h5 className="order-details__title">Your Order</h5>
                            <div className="order-details__item">
                                {cartItems}
                            </div>
                            <div className="order-details__count">
                                <div className="order-details__count__single">
                                    <h5>sub total</h5>
                                    <span className="price">${cartPriceTotal}</span>
                                </div>
                                <div className="order-details__count__single">
                                    <h5>Tax</h5>
                                    <span className="price">$9.00</span>
                                </div>
                                <div className="order-details__count__single">
                                    <h5>Shipping</h5>
                                    <span className="price">0</span>
                                </div>
                            </div>
                            <div className="ordre-details__total">
                                <h5>Order total</h5>
                                <span className="price">${cartPriceTotal + 9}</span>
                            </div>
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
	auth: state.auth,
	locale: state.locale
  });
  const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
  });

  export default connect(
    mapStateToProps, mapDispatchToProps
  )(CheckoutPage);