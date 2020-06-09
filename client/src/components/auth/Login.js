import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      rememberMe:true,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheckChange = this.onCheckChange.bind(this);

    this.rmCheck = document.getElementById("rememberMe");
    this.emailInput = document.getElementById("email");

    

  }

  componentDidMount() {
    console.log('componentDidMount - this.props: ', this.props)
    if (this.props.auth.isAuthenticated) {
       this.props.history.push('/shop');
    }

    if (localStorage.checkbox && localStorage.checkbox !== true) {
      //this.rmCheck.setAttribute("checked", "checked");
      this.setState({rememberMe:true})
      this.setState({email:localStorage.username});
    } else {
      this.setState({rememberMe:false})
      this.setState({email:''})
    }
    
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps - nextProps: ', nextProps)

    if (nextProps.auth.isAuthenticated === true) {
        nextProps.history.push('/shop');
    } 
    // if (nextProps.auth.isAuthenticated) {
    //   this.props.history.push('/shop');
    // }

    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    }   

    return null
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors })
    }
  }

  onSubmit(e) {
    e.preventDefault();  
    
    if (this.state.rememberMe === true) {
      localStorage.username = this.state.email;
      localStorage.checkbox = this.state.rememberMe;
    } else {
      localStorage.username = "";
      localStorage.checkbox = "";
    }   

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  
  onCheckChange(e){
    this.setState({rememberMe: !this.state.rememberMe})
  }

  head() {
		return (
		  <Helmet>
			<title>Login</title>
			<meta property="og:title" content="Login" />
		  </Helmet>
		);
	  }

  render() {
    
    const { errors } = this.state;
    const { user } = this.props.auth;
    console.log('After Login:', user);

    return (
      <>
      { this.head() }
      <div className="ht__bradcaump__area">
          <div className="ht__bradcaump__wrap">
              <div className="container">
                  <div className="row">
                      <div className="col-xs-12">
                          <div className="bradcaump__inner">
                              <nav className="bradcaump-inner">
                              <NavLink className="breadcrumb-item" to="/"><FormattedMessage id="nav.home" defaultMessage="Home" /></NavLink>    
                              <span className="brd-separetor"><i className="zmdi zmdi-chevron-right"></i></span>
                              <span className="breadcrumb-item active"><FormattedMessage id="nav.contact" defaultMessage="Contact Us" /></span>
                              </nav>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <section class="htc__contact__area ptb--100 bg__white">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2 className="title__line--6"><FormattedMessage id="login" defaultMessage="Login" /></h2>
                <form onSubmit={this.onSubmit}>
                    <div className="account__form">
                     <div className="single-contact-form">
                      <label><FormattedMessage id="emailaddress" defaultMessage="Email Address" /> <span>*</span></label>
                        <div class="contact-box name">                            
                            <FormattedMessage id="emailaddress" defaultMessage="Email Address">
                            { email=>  
                                <TextFieldGroup
                                placeholder={email}
                                name="email"
                                id="email"
                                type="text"
                                value={this.state.email}
                                onChange={this.onChange}
                                error={errors.email}
                              />
                                }
                            </FormattedMessage>
                        </div>
                        </div> 
                        <div className="single-contact-form">
                        <label><FormattedMessage id="password" defaultMessage="Password" /><span>*</span></label>
                        <div class="contact-box name">                            
                            <FormattedMessage id="password" defaultMessage="Password">   
                            { password=> 

                            <TextFieldGroup
                              placeholder={password}
                              name="password"
                              id="password"
                              type="password"
                              value={this.state.password}
                              onChange={this.onChange}
                              error={errors.password}
                            /> }
                            </FormattedMessage>
                            </div>
                        </div>
                        <div className="contact-btn">
                            <button type="submit" className="fv-btn"><FormattedMessage id="login" defaultMessage="Login" /></button>
                            <label className="label-for-checkbox">
                                <input id="rememberMe" className="input-checkbox" name="rememberMe" value="forever" type="checkbox" onChange={this.onCheckChange}  />
                                <span><FormattedMessage id="rememberme" defaultMessage="Remember me" /></span>
                            </label> 
                        </div>
                        <div className="lost-container">
                            <span className="col-lg-3 col-md-4 col-sm-12 col-xs-12"><NavLink className="forget_pass" to="#"><FormattedMessage id="lostyourpassword" defaultMessage="Lost your password" />?</NavLink></span>
                            <span className="col-lg-4 col-md-4 col-sm-12 col-xs-12">Not a registered customer? <NavLink className="forget_pass" to="/register">Register Now.</NavLink></span>
                        </div>
                    </div>
                </form>
            </div>
          </div>
          </div>
        </section>
    </>  
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
