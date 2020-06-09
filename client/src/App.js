import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';

import { store } from './store';
import { connect } from 'react-redux';

import { IntlProvider } from "react-intl";

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import DeliveryInformationPage from './pages/DeliveryInformationPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsConditionPage from './pages/TermsConditionPage'

import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'
import CheckoutPage from './pages/CheckoutPage'

import LoginPage from './components/auth/Login'
import RegisterPage from './components/auth/Register'
import NotFoundPage from './pages/NotFoundPage'
import ComingSoonPage from './pages/ComingSoonPage'

// import PrivateRoute from './components/common/PrivateRoute';

// import CreateAccount from './components/pages/Create-Account'
// 
// import Cart from './components/shop/Cart'
// import Wishlist from './components/shop/Wishlist'
// import Checkout from './components/shop/Checkout'
// 

// import Dashboard from './components/shop/MyAccount/Dashboard'

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { localeSet } from "./actions/localeAction";


import messages from "./messages";

if (localStorage.language) {
  store.dispatch(localeSet(localStorage.language));
}

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    //store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/';
  }
}



class App extends Component {

  render() {

    const { lang } = this.props
    return (
        
        <>
        <IntlProvider locale={lang} messages={messages[lang]}>
        <Router>            
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/delivery-information" component={DeliveryInformationPage} />
              <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
              <Route exact path="/terms-condition" component={TermsConditionPage} />

              <Route exact path="/shop" component={ShopPage} />
              <Route exact path="/shop/:catName" component={ShopPage} />
              <Route exact path="/shop/searchKey/:search" component={ShopPage} />
              <Route exact path="/product-details/:id" component={ProductDetailPage} />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/wishlist" component={WishlistPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route exact path="/coming-soon" component={ComingSoonPage} />

              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </Router>
        </IntlProvider>
        </>
    )
  }
}

const mapStateToProps = state => ({
   lang: state.locale.lang
})
export default connect(mapStateToProps)(App)
