import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const NotFoundPage = (props) => {
  //const {lang} = props.locale;
  function head() {
    return (
      <Helmet>
        <title>Not Found</title>
        <meta property="og:title" content="Not Found" />
      </Helmet>
    );
  }

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
                                    <span className="breadcrumb-item active">404</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="page_error section-padding--lg bg--white">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="error__inner text-center">
                      <div className="error__logo">
                        <NavLink to="/shop"><img src="images/others/404.jpg" alt="error" /></NavLink>
                      </div>                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </>
  )
};

const mapStateToProps = state => ({
	locale: state.locale
})
export default connect(mapStateToProps)(NotFoundPage)
