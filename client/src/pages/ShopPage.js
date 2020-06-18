import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux'

import BestSeller from '../components/shop/BestSeller'

import ShopGrid from '../components/shop/ShopGrid'
import ShopList from '../components/shop/ShopList'

import Category from '../components/shop/Category'
import { FormattedMessage } from "react-intl";
//import './Shop.css'

class Shop extends Component{
    constructor(props){
		super(props)
		
		this.state = {
			products: [],
			error: '',
			range:0,
            productModified:false,
            catName:'',
			sortDirection: 'descending'
		}
	}
	
	componentDidMount(){
        
        //console.log('catName', catUrl[2])
		const productPath = process.env.NODE_ENV === 'production' ? '/products-server.js' : '/products.js';
		axios.get(productPath)
      .then(response => {
       // console.log(response.data.results)
       
		this.setState({products: response.data.results});
		this.setState({range:1900})
      })
      .catch(err => console.log(err))
    }
    
    handleOnChange = (value) => {
		this.setState({
			range: value
		},() => {
			console.log('Price Slider value', this.state.range)
		})
	  }

	changeProducts = (products) => {
		this.setState({productModified:products})
	}
	
	changeSorting = (event) => {
		this.setState({ sortDirection: event.target.value });
    }
    
    head() {
        return (
          <Helmet>
            <title>Shop</title>
            <meta property="og:title" content="Shop" />
          </Helmet>
        );
      }

    render(){

		let { products, range, productModified, sortDirection  } = this.state

        const tempCatUrl = this.props.match.url;
        const catUrl = tempCatUrl.split('/');

        //console.log('tempCatUrl', catUrl[3])

        const tempResult = products;
        const productsArr = tempResult.filter(product => product.cat_slug === catUrl[2])
       
        if(catUrl[3]){
            var searchProduct = products ? products.filter(product => product.name.toLowerCase().includes(catUrl[3].toLowerCase())) : null;
        }
        
        // console.log('searchProduct', catUrl[3])

		let sortedProducts;
        //const productsGrid = productModified ? productModified : (productsArr.length > 0 ? productsArr : products);
        const productsGrid = productModified ? productModified : (searchProduct ? searchProduct :(productsArr.length > 0 ? productsArr : products));
		if(sortDirection === 'descending') {
		sortedProducts = productsGrid.sort((a, b) => (a.name > b.name) ? 1 : -1)
		}else{
		sortedProducts = productsGrid.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }
        

		// Shop Grid		
		const productShopGrid = sortedProducts.filter(item => item.price <= range)
		.map(product => {
				return <ShopGrid key={product.id} product={product} />		
			}		
		)

		// Shop 
		//const productsList = productModified ? productModified : products;
		const productShopList = sortedProducts.filter(item => item.price <= range)
		.map(product => {
				return <ShopList key={product.id} product={product} />		
			}		
		)

		
        return (
            <>
                { this.head() }
                <div className="ht__bradcaump__area bg-image--6">
                    <div className="ht__bradcaump__wrap">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bradcaump__inner text-center">
                                    <h2 className="bradcaump-title"><FormattedMessage id="nav.shop" defaultMessage="Shop" /></h2>
                                    <nav className="bradcaump-content">
                                    <NavLink  className="breadcrumb_item" to="/"><FormattedMessage id="nav.home" defaultMessage="Home" /></NavLink>
                                    <span className="brd-separetor">/</span>
                                    <span className="breadcrumb_item active"><FormattedMessage id="nav.shop" defaultMessage="Shop" /></span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

               
        			<div className="htc__product__grid bg__white ptb--100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 col-lg-push-3 col-md-9 col-md-push-3 col-sm-12 col-xs-12">
                                    <div className="htc__product__rightidebar">
                                        <div className="htc__grid__top">
                                            <div className="htc__select__option">
                                                <select className="ht__select" onChange={this.changeSorting}>
                                                    <option value="ascending">Default sorting</option>
                                                    <option value="descending">Sort by latest</option>
                                                    <option value="ascending">Sort by oldest</option>
                                                </select>
                                                {/* <select className="ht__select">
                                                    <option>Show by</option>
                                                    <option>Sort by popularity</option>
                                                    <option>Sort by average rating</option>
                                                    <option>Sort by newness</option>
                                                </select> */}
                                            </div>
                                            {/* <div className="ht__pro__qun">
                                                <span>Showing 1-12 of 1033 products</span>
                                            </div> */}
                                            
                                            <ul className="view__mode" role="tablist">
                                                <li role="presentation" className="grid-view active"><a href="#grid-view" role="tab" data-toggle="tab"><i className="zmdi zmdi-grid"></i></a></li>
                                                <li role="presentation" className="list-view"><a href="#list-view" role="tab" data-toggle="tab"><i className="zmdi zmdi-view-list"></i></a></li>
                                            </ul>
                                            
                                        </div>
                                
                                        <div className="row">
                                            <div className="shop__grid__view__wrap">
                                        <div role="tabpanel" id="grid-view" className="single-grid-view tab-pane fade in active clearfix">
                                            {productShopGrid}	                                               
                                        </div>
                                        <div role="tabpanel" id="list-view" className="single-grid-view tab-pane fade clearfix">
                                            <div className="col-xs-12">
                                                <div className="ht__list__wrap">
                                                    {productShopList}	    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                            
                                    </div>
                        
                                    {/* <div className="row">
                                        <div className="col-xs-12">
                                            <ul className="htc__pagenation">
                                            <li><a href="#"><i className="zmdi zmdi-chevron-left"></i></a></li> 
                                            <li><a href="#">1</a></li> 
                                            <li className="active"><a href="#">3</a></li>   
                                            <li><a href="#">19</a></li> 
                                            <li><a href="#"><i className="zmdi zmdi-chevron-right"></i></a></li> 
                                            </ul>
                                        </div>
                                    </div>                         */}
                                </div>

                                <div className="col-lg-3 col-lg-pull-9 col-md-3 col-md-pull-9 col-sm-12 col-xs-12 smt-40 xmt-40">                        
                                    <div className="htc__product__leftsidebar">
                            
                            <div className="htc-grid-range">
                                <h4 className="title__line--4">Price</h4>
                                <div className="content-shopby">
                                    <div className="price_filter s-filter clear">                                        
                                            <div className="slider-range">
                                                <div className="price-output-wrap">
                                                <p>$0 - ${range}</p>
                                                    <Slider
                                                        min={0}
                                                        max={2000}
                                                        step={100}
                                                        value={range}
                                                        orientation="horizontal"
                                                        onChange={this.handleOnChange}
                                                    />
                                                    
                                                   
                                                </div>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="htc__category">
                                <h4 className="title__line--4">categories</h4>
                                <ul className="ht__cat__list">
                                <Category products={this.state.products}  changeProducts={this.changeProducts} />
                                </ul>
                            </div>
                            
                            {/* <div className="ht__pro__color">
                                <h4 className="title__line--4">color</h4>
                                <ul className="ht__color__list">
                                    <li className="grey"><NavLink to="#">grey</NavLink></li>
                                    <li className="lamon"><NavLink to="#">lamon</NavLink></li>
                                    <li className="white"><NavLink to="#">white</NavLink></li>
                                    <li className="red"><NavLink to="#">red</NavLink></li>
                                    <li className="black"><NavLink to="#">black</NavLink></li>
                                    <li className="pink"><NavLink to="#">pink</NavLink></li>
                                </ul>
                            </div> */}
                           
                            
                            <div className="htc__recent__product">
                                <h2 className="title__line--4">best seller</h2>
                                <div className="htc__recent__product__inner">
                                    <BestSeller />                                         
                                </div>
                            </div>
                           
                        </div>
                    </div>
                
                </div>

            </div>
        </div>
    

    </>
        )
    }
}
const mapStateToProps = state => ({
    products: state.products
  });
export default connect(mapStateToProps, null)(Shop)