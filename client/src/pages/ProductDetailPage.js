import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux'
import {addItem} from '../actions/cartAction'
import { useAlert, positions } from 'react-alert'

import ProductCrasual from '../components/shop/Product-Crasual'
import LogoSlider from '../components/shop/LogoSlider'

function ProductDetailPage(props) {

    const alert = useAlert();
    
    const addToCartHandler = (product) => {
        props.addItem(product);
        alert.show('Product Added to Cart Successfully!!!', { position: positions.MIDDLE,  type: 'success' })

    }


    const [product, setProduct] = useState({p:{}});
    const productId = props.match.params.id;

    const apiData = useCallback(()=> {
        axios.get('/products.js')
        .then(response => {
            
            const allProducts = response.data.results;
            const singleProduct = allProducts.filter(item => item.id === parseInt(productId))  
            console.log('singleProduct', singleProduct[0])          
            setProduct({p: singleProduct[0]})
        })
        .catch(err => console.log(err))
    },[productId])
    
    useEffect(() => apiData(),[productId,apiData])

    function head() {
        return (
          <Helmet>
            <title>{`Absas:: ${product.p.name}`}</title>
            <meta property="og:title" content={`Absas:: ${product.p.name}`} />
          </Helmet>
        );
      }

    return (
        <>
            { head() }
            <div className="ht__bradcaump__area bg-image--4">
                <div className="ht__bradcaump__wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="bradcaump__inner">
                                    <nav className="bradcaump-inner">
                                    <NavLink className="breadcrumb_item" to="/">Home</NavLink>
                                    <span className="brd-separetor"><i className="zmdi zmdi-chevron-right"></i></span>
                                    <NavLink className="breadcrumb_item" to="/shop">Products</NavLink>
                                    <span className="brd-separetor"><i className="zmdi zmdi-chevron-right"></i></span>
                                    <span className="breadcrumb-item active">{product.p.name}</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>

            <section className="htc__product__details bg__white ptb--100">
            <div className="htc__product__details__top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                            <div className="htc__product__details__tab__content">
                                <div className="product__big__images">
                                    <div className="portfolio-full-image tab-content">
                                        <div role="tabpanel" className="tab-pane fade in active" id="img-tab-1">
                                            <img src="images/product-2/big-img/1.jpg" alt="absas" />
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="img-tab-2">
                                            <img src="images/product-2/big-img/2.jpg" alt="absas" />
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="img-tab-3">
                                            <img src="images/product-2/big-img/3.jpg" alt="absas" />
                                        </div>
                                    </div>
                                </div>
                                <ul className="product__small__images" role="tablist">
                                    <li role="presentation" className="pot-small-img active">
                                        <NavLink to="#img-tab-1" role="tab" data-toggle="tab">
                                            <img src="images/product-2/sm-img-3/3.jpg" alt="absas" />
                                        </NavLink>
                                    </li>
                                    <li role="presentation" className="pot-small-img">
                                        <NavLink to="#img-tab-2" role="tab" data-toggle="tab">
                                            <img src="images/product-2/sm-img-3/1.jpg" alt="absas" />
                                        </NavLink>
                                    </li>
                                    <li role="presentation" className="pot-small-img">
                                        <NavLink to="#img-tab-3" role="tab" data-toggle="tab">
                                            <img src="images/product-2/sm-img-3/2.jpg" alt="absas" />
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 smt-40 xmt-40">
                            <div className="ht__product__dtl">
                                <h2>{product.p.name}</h2>
                                <h6>Model: <span>MNG001</span></h6>
                                <ul className="rating">
                                    <li><i className="icon-star icons"></i></li>
                                    <li><i className="icon-star icons"></i></li>
                                    <li><i className="icon-star icons"></i></li>
                                    <li className="old"><i className="icon-star icons"></i></li>
                                    <li className="old"><i className="icon-star icons"></i></li>
                                </ul>
                                <ul  className="pro__prize">
                                    <li className="old__prize">${ product.p.price }</li>
                                    <li className="new__prize">${ product.p.price - product.p.discount}</li>
                                </ul>
                                <p className="pro__info">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan</p>
                                <div className="ht__pro__desc">
                                    <div className="sin__desc">
                                        <p><span>Availability:</span> In Stock</p>
                                    </div>                               
                                   
                                    <div className="sin__desc product__share__link">
                                        <NavLink className="fr__btn" to="#" onClick={() => addToCartHandler(product)}>Add To Cart</NavLink>
                                    </div> 
                                   

                                    <div className="sin__desc product__share__link">
                                        <p><span>Share this:</span></p>
                                        <div class="sharethis-inline-share-buttons"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="htc__produc__decription bg__white">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="pro__details__tab" role="tablist">
                            <li role="presentation" className="description active"><NavLink to="#description" role="tab" data-toggle="tab">description</NavLink></li>
                            <li role="presentation" className="review"><NavLink to="#review" role="tab" data-toggle="tab">review</NavLink></li>
                            <li role="presentation" className="shipping"><NavLink to="#shipping" role="tab" data-toggle="tab">shipping</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="ht__pro__details__content">
                            <div role="tabpanel" id="description" className="pro__single__content tab-pane fade in active">
                                <div className="pro__tab__content__inner">
                                    <p>Formfitting clothing is all about a sweet spot. That elusive place where an item is tight but not clingy, sexy but not cloying, cool but not over the top. Alexandra Alvarez’s label, Alix, hits that mark with its range of comfortable, minimal, and neutral-hued bodysuits.</p>
                                    <h4 className="ht__pro__title">Description</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                    <h4 className="ht__pro__title">Standard Featured</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in</p>
                                </div>
                            </div>
                            <div role="tabpanel" id="review" className="pro__single__content tab-pane fade">
                                <div className="pro__tab__content__inner">
                                    <p>Formfitting clothing is all about a sweet spot. That elusive place where an item is tight but not clingy, sexy but not cloying, cool but not over the top. Alexandra Alvarez’s label, Alix, hits that mark with its range of comfortable, minimal, and neutral-hued bodysuits.</p>
                                    <h4 className="ht__pro__title">Description</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                    <h4 className="ht__pro__title">Standard Featured</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                </div>
                            </div>
                            <div role="tabpanel" id="shipping" className="pro__single__content tab-pane fade">
                                <div className="pro__tab__content__inner">
                                    <p>Formfitting clothing is all about a sweet spot. That elusive place where an item is tight but not clingy, sexy but not cloying, cool but not over the top. Alexandra Alvarez’s label, Alix, hits that mark with its range of comfortable, minimal, and neutral-hued bodysuits.</p>
                                    <h4 className="ht__pro__title">Description</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                    <h4 className="ht__pro__title">Standard Featured</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="htc__product__area--2 pb--100 product-details-res">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section__title--2 text-center">
                            <h2 className="title__line">New Arrivals</h2>
                            <p>But I must explain to you how all this mistaken idea</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="product__wrap clearfix">
                        <ProductCrasual />   
                    </div>
                </div>
            </div>
        </section>
            
        <div className="htc__brand__area bg__cat--4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ht__brand__inner">
                            <ul className="logo-slider">
                                <LogoSlider />
                            </ul>
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
    productLists:state.allProducts
  });

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductDetailPage);
