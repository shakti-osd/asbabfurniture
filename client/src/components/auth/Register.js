import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors })
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({ errors: nextProps.errors });
  //   }
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  head() {
		return (
		  <Helmet>
			<title>Register</title>
			<meta property="og:title" content="Register" />
		  </Helmet>
		);
	  }

  render() {
    const { errors } = this.state;

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
                              <span className="breadcrumb-item active"><FormattedMessage id="register" defaultMessage="Register" /></span>
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
              <h2 className="title__line--6"><FormattedMessage id="register" defaultMessage="Register" /></h2>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="account__form">
                <div className="single-contact-form">
                    <label><FormattedMessage id="name" defaultMessage="Name" /><span>*</span></label>
                    <div className="contact-box name">
                        
                        <FormattedMessage id="name" defaultMessage="Name">
                          { name=>  

                          <TextFieldGroup
                            placeholder={name}
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            error={errors.name}
                          />
                        }
                        </FormattedMessage>
                        </div>
                    </div>
                    <div className="single-contact-form">  
                    <label><FormattedMessage id="email" defaultMessage="Email" /><span>*</span></label>
                    <div className="contact-box name">
                          
                          <FormattedMessage id="email" defaultMessage="Email">
                          { email=> 
                          <TextFieldGroup
                            placeholder={email}
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}
                          />
                        }
                        </FormattedMessage>                        
                    </div> 
                    <em>This site uses Gravatar so if you want a profile image, use a Gravatar email</em>
                    </div>
                    <div className="single-contact-form"> 
                    <label><FormattedMessage id="password" defaultMessage="Password" /><span>*</span></label> 
                    <div className="contact-box name">
                        
                        <FormattedMessage id="password" defaultMessage="Password">   
                         { password=> 
                        <TextFieldGroup
                          placeholder={password}
                          name="password"
                          type="password"
                          value={this.state.password}
                          onChange={this.onChange}
                          error={errors.password}
                        />
                      }
                      </FormattedMessage>
                  </div> 
                  </div>
                  <div className="single-contact-form"> 
                  <label><FormattedMessage id="confirmpassword" defaultMessage="Confirm Password" /><span>*</span></label> 
                    <div className="contact-box name">
                        
                        <FormattedMessage id="confirmpassword" defaultMessage="Confirm Password">   
                         { cpassword=> 
                        <TextFieldGroup
                          placeholder={cpassword}
                          name="password2"
                          type="password"
                          value={this.state.password2}
                          onChange={this.onChange}
                          error={errors.password2}
                        />
                         }
                        </FormattedMessage>
                  </div>
                  </div>
                <div className="contact-btn">  
                  <button type="submit" className="fv-btn"><FormattedMessage id="register" defaultMessage="Register" /></button>
                </div>
                <div className="lost-container">
                  <span className="col-lg-4 col-md-4 col-sm-12 col-xs-12">Already registered? <NavLink className="forget_pass" to="/login">Login Now.</NavLink></span>
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
