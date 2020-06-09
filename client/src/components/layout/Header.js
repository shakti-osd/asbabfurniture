import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import CartItem from '../shop/Cart-Item'
import { withRouter } from 'react-router'

import { NavLink } from 'react-router-dom'
//import { FormattedMessage } from 'react-intl';
//import {logoutUser} from '../../actions/authActions'

function Header(props) {
    //const {lang} = props.locale;
    const {cart} = props;
    const totalItemsArray = props.cart.cartItems;
    const totalItems = totalItemsArray.reduce((prev, cur) => prev + cur.quantity, 0)
   // console.log('Items',totalItems );

    // toggle Hearder Search
	const [searchToggle, setSearchToggle] = useState(false)	
	const toggleSearch = () => {
		setSearchToggle(!searchToggle)
	}

	var searchClass = "";		
	if(searchToggle) {
		searchClass = 'search__box__show__hide';
    }

    useEffect(() => {
        document.body.className = searchClass;        
    },[searchToggle, searchClass])

    // Toggle Mini Cart
	const [cartToggle, setCartToggle] = useState({addClass:false})
	const toggleMiniCart = () => {
		setCartToggle({addClass:!cartToggle.addClass})
	}

	var cartClass = ["shopping__cart"];	
	
	if(cartToggle.addClass) {
		cartClass.push('shopping__cart__on');
    }


    // Toggle Mobile Menu
	const [menuToggle, setMenuToggle] = useState({addClass:false})
	const toggleMobileMenu = () => {
		setMenuToggle({addClass:!menuToggle.addClass})
	}

    var menuClass = ["meanmenu-reveal"];
    
    var menuClassNone = 'none';  
    
	if(menuToggle.addClass) {
        menuClass.push('meanclose');
        menuClassNone = '';        
    }

    // Toggle Mobile Menu Pages Sub Menu
	const [menuTogglePages, setMenuTogglePages] = useState({addClass:false})
	const toggleMobileMenuPages = () => {
		setMenuTogglePages({addClass:!menuTogglePages.addClass})
	}

    
    var menuClassPagesNone = 'none';      
	if(menuTogglePages.addClass) {
        menuClassPagesNone = '';        
    }

    ////////////////////////////////
    
    const [search, setSearch] = useState('');
    const onChangeHandler = e => {
        setSearch(e.target.value);
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        props.history.push(`/shop/searchKey/${search}`)
        console.log('search',props)
    }
    
    
    return (
        <>
            <header id="htc__header" className="htc__header__area header--one">
                <div id="sticky-header-with-topbar" className="mainmenu__wrap sticky__header">
                    <div className="container">
                        <div className="row">
                            <div className="menumenu__container clearfix">
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5"> 
                                    <div className="logo">
                                        <NavLink to="/"><img src="images/logo/4.png" alt="logo images" /></NavLink>
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-8 col-sm-5 col-xs-3">
                                    <nav className="main__menu__nav hidden-xs hidden-sm">
                                        <ul className="main__menu">
                                            <li className="drop"><NavLink to="/">Home</NavLink></li>
                                            <li className="drop"><NavLink to="#">Living</NavLink>
                                                <ul className="dropdown mega_dropdown">
                                                    <li><NavLink to="#" className="mega__title">Sofa Set</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/shop/fabric-sofa-sets" >Fabric Sofa Sets</NavLink></li>
                                                            <li><NavLink to="/shop/wooden-sofa-sets" >Wooden Sofa Sets</NavLink></li>
                                                            <li><NavLink to="/shop/sofa-cum-beds" >Sofa Cum Beds</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Leather Sofa Sets</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Sofa Cum Bed</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Fabric Sofa Beds</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Wooden Sofa Beds</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Chairs</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Lounge Chairs</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Designer Chairs</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Benches</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Bar Stools</NavLink></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="drop"><NavLink to="/coming-soon">Bedroom</NavLink>
                                                <ul className="dropdown mega_dropdown">
                                                    <li><NavLink to="#" className="mega__title">Beds</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Beds With Storage</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Beds Without Storage</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Double Beds</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Single Beds</NavLink></li>
                                                            <li><NavLink to="/coming-soon">King Size Beds</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Queen Size Beds</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Kids Beds</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Mattresses</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Mattresses</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Kids Bedroom</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Kids Beds</NavLink></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="drop"><NavLink to="/coming-soon">Dining</NavLink>
                                                <ul className="dropdown mega_dropdown">
                                                    <li><NavLink to="#" className="mega__title">Dining Tables & Sets</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">8 Seater Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">6 Seater Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">4 Seater Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Folding Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">All Table Sets</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Chairs</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Dining Chairs</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Chair Pads</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Benches</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Dining Storage</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Crockery Units</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Kitchen Cabinets & Racks</NavLink></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="drop"><NavLink to="/coming-soon">Study</NavLink>
                                                <ul className="dropdown mega_dropdown">
                                                    <li><NavLink to="#" className="mega__title">Study Tables</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">8 Seater Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">6 Seater Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">4 Seater Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Folding Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">All Table Sets</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Study Chairs</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Dining Chairs</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Chair Pads</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Benches</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Study Lamps</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Crockery Units</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Kitchen Cabinets & Racks</NavLink></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="/contact">contact</NavLink></li>
                                        </ul>
                                    </nav>

                                    <div className="mobile-menu clearfix visible-xs visible-sm">
                                    
                                    </div>  
                                </div>
                                <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                                    <div className="header__right">
                                        <div className="header__search search search__open">
                                            <NavLink to="#" onClick={toggleSearch} ><i className="icon-magnifier icons"></i></NavLink>
                                        </div>
                                        <div className="header__account">
                                            <NavLink to="/login"><i className="icon-user icons"></i></NavLink>
                                        </div>
                                        <div className="htc__shopping__cart">
                                            <NavLink className="cart__menu" to="#" onClick={toggleMiniCart}><i className="icon-handbag icons"></i></NavLink>
                                            <NavLink to="#" ><span className="htc__qua">{ totalItems }</span></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mobile-menu-area mean-container">
                            <div className="mean-bar"><NavLink to="#nav" onClick={toggleMobileMenu} className={menuClass.join(' ')}
                                style={{ right: '0px', left: 'auto', textAlign: 'center', textIndent: '0px', fontSize: '18px' }}>
                                    <span></span><span></span><span></span></NavLink>
                                <nav className="mean-nav">
                                    <ul className={menuClassNone}>
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="#">Living Room</NavLink>
                                            <ul className={menuClassPagesNone}>
                                                    <li><NavLink to="#" className="mega__title">Sofa Set</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/shop/fabric-sofa-sets" >Fabric Sofa Sets</NavLink></li>
                                                            <li><NavLink to="/shop/wooden-sofa-sets" >Wooden Sofa Sets</NavLink></li>
                                                            <li><NavLink to="/shop/sofa-cum-beds" >Sofa Cum Beds</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Leather Sofa Sets</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Sofa Cum Bed</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Fabric Sofa Beds</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Wooden Sofa Beds</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Chairs</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Lounge Chairs</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Designer Chairs</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Benches</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Bar Stools</NavLink></li>
                                                        </ul>
                                                    </li>
                                                <li><NavLink to="/cart">Cart page</NavLink></li>
                                                <li><NavLink to="/checkout">checkout</NavLink></li>
                                                <li><NavLink to="/contact">contact</NavLink></li>
                                                <li><NavLink to="/wishlist">wishlist</NavLink></li>
                                            </ul>
                                            <NavLink to="#" className="mean-expand" href="#" onClick={toggleMobileMenuPages}>+</NavLink>
                                        </li>
                                        
                                        
                                        <li><NavLink to="#">Bedroom</NavLink>
                                                <ul className={menuClassPagesNone}>
                                                    <li><NavLink to="#" className="mega__title">Beds</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Beds With Storage</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Beds Without Storage</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Double Beds</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Single Beds</NavLink></li>
                                                            <li><NavLink to="/coming-soon">King Size Beds</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Queen Size Beds</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Kids Beds</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Mattresses</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Mattresses</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Kids Bedroom</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Kids Beds</NavLink></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <NavLink to="#" className="mean-expand" href="#" onClick={toggleMobileMenuPages}>+</NavLink>
                                        </li>
                                        
                                        <li className="drop"><NavLink to="#">Dining</NavLink>
                                                <ul className={menuClassPagesNone}>
                                                    <li><NavLink to="#" className="mega__title">Dining Tables & Sets</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">8 Seater Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">6 Seater Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">4 Seater Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Folding Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">All Table Sets</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Chairs</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Dining Chairs</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Chair Pads</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Benches</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Dining Storage</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Crockery Units</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Kitchen Cabinets & Racks</NavLink></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <NavLink to="#" className="mean-expand" href="#" onClick={toggleMobileMenuPages}>+</NavLink>
                                            </li>
                                            <li className="drop"><NavLink to="#">Study</NavLink>
                                                <ul className={menuClassPagesNone}>
                                                    <li><NavLink to="#" className="mega__title">Study Tables</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">8 Seater Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">6 Seater Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">4 Seater Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Folding Dining Table Sets</NavLink></li>
                                                            <li><NavLink to="/coming-soon">All Table Sets</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Study Chairs</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Dining Chairs</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Chair Pads</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Benches</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    <li><NavLink to="#" className="mega__title">Study Lamps</NavLink>
                                                        <ul className="mega__item">
                                                            <li><NavLink to="/coming-soon">Crockery Units</NavLink></li>
                                                            <li><NavLink to="/coming-soon">Kitchen Cabinets & Racks</NavLink></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <NavLink to="#" className="mean-expand" href="#" onClick={toggleMobileMenuPages}>+</NavLink>
                                            </li>

                                        <li className="mean-last"><NavLink to="/contact">contact</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                       </div>

                                          
                    </div>
                </div>            
            </header>
        <div className="body__overlay"></div>

        <div className="offset__wrapper">
            <div className="search__area">
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-12" >
                            <div className="search__inner">
                                <form onSubmit={onSubmitHandler} >
                                    <input name="search" placeholder="Search here... " type="text" value={search}  onChange={onChangeHandler} />
                                    <button type="submit"></button>
                                </form>
                                <div className="search__close__btn">
                                    <span className="search__close__btn_icon" onClick={toggleSearch}><i className="zmdi zmdi-close"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cartClass.join(' ')}>
                <div className="shopping__cart__inner">                    
                        <CartItem products={cart.cartItems} toggleCart={toggleMiniCart}/>	
                </div>
            </div>
        </div>
    </>
    )
}

const mapStateToProps = state => ({
    products: state.products,
    cart: state.cart,
    locale: state.locale
  });
  
  export default connect(
    mapStateToProps
  )(withRouter(Header));

