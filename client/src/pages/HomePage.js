import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Helmet } from 'react-helmet';

//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import ProductCrasual from '../components/shop/Product-Crasual'
import LogoSlider from '../components/shop/LogoSlider'
import TestimonialSlider from '../components/shop/TestimonialSlider';

class HomePage extends PureComponent {   
  
  head() {
    return (
      <Helmet>
        <title>Asbab Furniture</title>
        <meta property="og:title" content="Asbab Furniture" />
      </Helmet>
    );
  }

  render() {   

  return (
    <>
        { this.head() }
            <div className="slide__container ">   
                    <div className="row align-items__center">
                        <img src="/images/slider/bg/1.jpg" alt="" />
                    </div>           
                        {/* <Carousel autoPlay showThumbs={false}>                           
                                
                                    <div className="row align-items__center">
                                        <img src="/images/slider/bg/1.jpg" alt="" />
                                    </div>                              
                            
                            
                                <div className="row align-items__center">
                                    <img src="/images/slider/bg/2.jpg" alt="" />
                                </div>
                           
                        </Carousel>                     */}
                        
                </div>

            <section className="htc__category__area ptb--100">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section__title--2 text-center">
                            <h2 className="title__line">New Arrivals</h2>
                            <p>This is BIG! 25% off regular price – including New Arrivals!</p>
                        </div>
                    </div>
                </div>
                <div className="htc__product__container">
                    <div className="row">
                        <div className="product__list1 clearfix mt--30">
                            <ProductCrasual />             
                        </div>
                       
                    </div>
                </div>
              </div>
          </section>
      
          <section className="htc__good__sale bg__cat--3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                        <div className="fr__prize__inner">
                            <h2>Most popular product category from our store!!</h2>
                            <h3>Pick any as per your choice.</h3>
                            <a className="fr__btn" href="/shop/sofa-cum-beds">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                        <div className="prize__inner">
                            <div className="prize__thumb">
                                <img src="images/product/sofa-cum-beds/Kowloon_Blue.jpg" alt="banner images" />
                            </div>
                            <div className="banner__info">
                                <div className="pointer__tooltip pointer--3 align-left">
                                    <div className="tooltip__box">
                                        <h4>Tooltip Left</h4>
                                        <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                    </div>
                                </div>
                                <div className="pointer__tooltip pointer--4 align-top">
                                    <div className="tooltip__box">
                                        <h4>Tooltip Top</h4>
                                        <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                    </div>
                                </div>
                                <div className="pointer__tooltip pointer--5 align-bottom">
                                    <div className="tooltip__box">
                                        <h4>Tooltip Bottom</h4>
                                        <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                    </div>
                                </div>
                                <div className="pointer__tooltip pointer--6 align-top">
                                    <div className="tooltip__box">
                                        <h4>Tooltip Bottom</h4>
                                        <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                    </div>
                                </div>
                                <div className="pointer__tooltip pointer--7 align-top">
                                    <div className="tooltip__box">
                                        <h4>Tooltip Bottom</h4>
                                        <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="ftr__product__area ptb--100">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section__title--2 text-center">
                            <h2 className="title__line">Best Seller</h2>
                            <p>Here are the best seller product list. Enjoy with a huge options.</p>
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
              
      <section className="htc__testimonial__area bg__cat--4">
            <div className="container">
                <div className="row">
                    <div className="ht__testimonial__activation clearfix">
                        <TestimonialSlider />                       
                    </div>
                </div>
            </div>
        </section>

        <section className="top__rated__area bg__white pt--100 pb--110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section__title--2 text-center">
                            <h2 className="title__line">Top Rated</h2>
                            <p>Below are the top rated products, you can pick from a distinct range.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt--20">
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
  );
};
}

export default connect(null)(HomePage);
