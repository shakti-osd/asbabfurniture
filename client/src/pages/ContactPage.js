import React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import {contactSubmit} from '../actions/contactAction'
import TextFieldGroup from '../components/common/TextFieldGroup';
import TextAreaFieldGroup from '../components/common/TextAreaFieldGroup'
import { FormattedMessage } from 'react-intl';



class ContactPage extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			fname: '',
			lname: '',
			email: '',
			website: '',
			subject: '',
			message: '',
			errors: {}
		  };
	  
		  this.onChange = this.onChange.bind(this);
		  this.onSubmit = this.onSubmit.bind(this);
	}


	static getDerivedStateFromProps(nextProps, prevState) {

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



	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	  }
	
	  onSubmit(e) {
		e.preventDefault();
	
		const contactMsg = {
		  fname: this.state.fname,
		  lname: this.state.lname,
		  email: this.state.email,
		  website: this.state.website,
		  subject: this.state.subject,
		  message: this.state.message
		};
		//console.log(contactMsg)
		this.props.contactSubmit(contactMsg, this.props.history);
	  }
	
	  head() {
		return (
		  <Helmet>
			<title>Contact Us</title>
			<meta property="og:title" content="Contact Us" />
		  </Helmet>
		);
	  }

	render(){	

		const { errors } = this.state;	
		const {lang} = this.props.locale;

		//console.log('errors', errors)
	
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
            
            <section className="htc__contact__area ptb--100 bg__white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                        <div className="map-contacts--2">
                            <h2 className="title__line--6">Our Office Location</h2>
                            <div id="googleMap"><img src="images/others/map.png" alt="Absas"/></div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                        <h2 className="title__line--6">CONTACT US</h2>
                        <div className="address">
                            <div className="address__icon">
                                <i className="icon-location-pin icons"></i>
                            </div>
                            <div className="address__details">
                                <h2 className="ct__title">our address</h2>
                                <p>666 5th Ave New York, NY, United </p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="address__icon">
                                <i className="icon-envelope icons"></i>
                            </div>
                            <div className="address__details">
                                <h2 className="ct__title">openning hour</h2>
                                <p>666 5th Ave New York, NY, United </p>
                            </div>
                        </div>

                        <div className="address">
                            <div className="address__icon">
                                <i className="icon-phone icons"></i>
                            </div>
                            <div className="address__details">
                                <h2 className="ct__title">Phone Number</h2>
                                <p>123-6586-587456</p>
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="row">
                    <div className="contact-form-wrap mt--60">
                        <div className="col-xs-12">
                            <div className="contact-title">
                                <h2 className="title__line--6">SEND A MAIL</h2>
                            </div>
                        </div>
                        <div className="col-xs-12">
                        <form id="contact-form" onSubmit={this.onSubmit}>
                        <div className="single-contact-form">
                                    <div className="contact-box name">
								<FormattedMessage id="firstname" defaultMessage="First Name*">
								{ placeholder =>  
								<TextFieldGroup
									placeholder={`${placeholder}*`}
									name="fname"
									value={this.state.fname}
									onChange={this.onChange}
									error={errors.fname}
								/>
								}
								</FormattedMessage>	

                                <FormattedMessage id="lastname" defaultMessage="Last Name*">
								{ placeholder =>  
								<TextFieldGroup
									placeholder={`${placeholder}*`}
									name="lname"
									value={this.state.lname}
									onChange={this.onChange}
									error={errors.lname}
								/>
								}
								</FormattedMessage>	
                                </div>
                            </div>
                            <div className="single-contact-form">
                                <div className="contact-box name">
								<FormattedMessage id="email" defaultMessage="Email*">
								{ placeholder =>  
								<TextFieldGroup
									placeholder={`${placeholder}*`}
									name="email"
									value={this.state.email}
									onChange={this.onChange}
									error={errors.email}
								/>
							}
							</FormattedMessage>	
							<FormattedMessage id="website" defaultMessage="Website*">
								{ placeholder =>  
                                <TextFieldGroup
									placeholder={`${placeholder}*`}
									name="website"
									value={this.state.website}
									onChange={this.onChange}
									error={errors.website}
								/>
							}
                            </FormattedMessage>	
                            </div>
                        </div>
							
                               
                        <div className="single-contact-form">
                            <div className="contact-box subject">
								<FormattedMessage id="subject" defaultMessage="Subject*">
								{ placeholder =>  
                                <TextFieldGroup
									placeholder={`${placeholder}*`}
									name="subject"
									value={this.state.subject}
									onChange={this.onChange}
									error={errors.subject}
								/>
                                }
                                </FormattedMessage>	
                                </div>
                            </div>
                            
                        <div className="single-contact-form">
                            <div className="contact-box message">
							<FormattedMessage id="message" defaultMessage="Message*">
								{ placeholder =>  
								<TextAreaFieldGroup
									placeholder={`${placeholder}*`}
									name="message"
									value={this.state.message}
									onChange={this.onChange}
									error={errors.message}
								/>
								}
							</FormattedMessage>	
                            </div>
                        </div>
                        <div className="contact-btn">
                                    <button type="submit" className="fv-btn">{lang === 'en' ? 'Send Email' : 'Отправить письмо'}</button>
                                </div>
                            </form>

                            
                            <div className="form-output">
                                <p className="form-messege"></p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
           

        </>
	)
	
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors,
	contact: state.contact,
	locale: state.locale
  });
  
  export default connect(mapStateToProps, { contactSubmit })(ContactPage);