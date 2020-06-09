import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { FormattedMessage } from 'react-intl'

class Address extends Component {
    constructor (props) {
    super(props);
    this.state = {fname:'', lname:'', company:'', country: '', address:'', apartment:'', city:'', region: '', postcode:'', phone:'', email:'' };
    }
    
    selectCountry (val) {
    this.setState({ country: val });
    }
    
    selectRegion (val) {
    this.setState({ region: val });
	}
	
	changeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}


    render() {
		const { country, region } = this.state;
		const {user} = this.props.auth;
		const { lang } = this.props.locale;
        return (
            <>
              <div className="col-lg-6 col-12">
        				<div className="customer_details">
        					<h3><FormattedMessage id="billingdetails" defaultMessage="Billing details" /></h3>
        					<div className="customar__field">
        						<div className="margin_between">
	        						<div className="input_box space_between">
	        							<label><FormattedMessage id="firstname" defaultMessage="First name" /> <span>*</span></label>
	        							<input name="fname" type="text" onChange={this.changeHandler} value={user ? user.name : this.state.fname} />
	        						</div>
	        						<div className="input_box space_between">
	        							<label><FormattedMessage id="lastname" defaultMessage="Last name" /> <span>*</span></label>
	        							<input name="lname" type="text" onChange={this.changeHandler} value={user ? user.lname : this.state.lname} />
	        						</div>
        						</div>
        						<div className="input_box">
        							<label><FormattedMessage id="companyname" defaultMessage="Company name" /> <span>*</span></label>
        							<input name="cname" type="text" onChange={this.changeHandler} value={this.state.cname} />
        						</div>
        						<div className="input_box">
        							<label><FormattedMessage id="country" defaultMessage="Country" /><span>*</span></label>
									<CountryDropdown className="select__option"
										name="country"										
                                        value={country}
                                        onChange={(val) => this.selectCountry(val)} />

        						</div>
        						<div className="input_box">
        							<label><FormattedMessage id="address" defaultMessage="Address" /> <span>*</span></label>
									<input name="address" type="text" onChange={this.changeHandler} 
										value={this.state.address} 
										placeholder={lang === 'en' ? 'Street address' : 'адрес улицы' } />
        						</div>
        						<div className="input_box">
									<input name="apartment" type="text" 
										onChange={this.changeHandler} 
										value={this.state.apartment} 
										placeholder={lang === 'en' ? 'Apartment, suite, unit etc. (optional)' : 'Квартира, люкс, блок и т. Д. (По желанию)' } />
        						</div>
                                <div className="input_box">
        							<label><FormattedMessage id="city" defaultMessage="City" /> <span>*</span></label>
									<input name="city" type="text" onChange={this.changeHandler} 
											value={this.state.city} 
											placeholder={lang === 'en' ? 'City' : 'город' } />
        						</div>
        						<div className="input_box">
        							<label><FormattedMessage id="region" defaultMessage="Region" /><span>*</span></label>
									<RegionDropdown className="select__option"
										name="region"
                                        country={country}
                                        value={region}
                                        onChange={(val) => this.selectRegion(val)} />
        						</div>
								<div className="input_box">
									<label><FormattedMessage id="postcode" defaultMessage="Postcode / ZIP" /> <span>*</span></label>
									<input name="postcode" type="text" onChange={this.changeHandler} value={this.state.postcode} />
								</div>
								<div className="margin_between">
									<div className="input_box space_between">
										<label><FormattedMessage id="phone" defaultMessage="Phone" /> <span>*</span></label>
										<input name="phone" type="text" onChange={this.changeHandler} value={this.state.phone} />
									</div>

									<div className="input_box space_between">
										<label><FormattedMessage id="emailaddress" defaultMessage="Email address" /> <span>*</span></label>
										<input name="email" type="email" onChange={this.changeHandler} value={user ? user.email : this.state.email} />
									</div>
								</div>
        					</div>
        					{/* <div className="create__account">
        						<div className="wn__accountbox">
	        						<input className="input-checkbox" name="createaccount" value="1" type="checkbox" />
	        						<span>Create an account ?</span>
        						</div>
        						<div className="account__field">
        							<form action="#">
        								<label>Account password <span>*</span></label>
        								<input type="text" placeholder="password" />
        							</form>
        						</div>
        					</div> */}
        				</div>
        				{/* <div className="customer_details mt--20">
        					<div className="differt__address">
	        					<input name="ship_to_different_address" value="1" type="checkbox" />
	        					<span>Ship to a different address ?</span>
        					</div>
        					<div className="customar__field differt__form mt--40">
        						<div className="margin_between">
	        						<div className="input_box space_between">
	        							<label>First name <span>*</span></label>
	        							<input type="text" />
	        						</div>
	        						<div className="input_box space_between">
	        							<label>last name <span>*</span></label>
	        							<input type="text" />
	        						</div>
        						</div>
        						<div className="input_box">
        							<label>Company name <span>*</span></label>
        							<input type="text" />
        						</div>
        						<div className="input_box">
        							<label>Country<span>*</span></label>
        							<select className="select__option">
										<option>Select a country…</option>
										<option>Afghanistan</option>
										<option>American Samoa</option>
										<option>Anguilla</option>
										<option>American Samoa</option>
										<option>Antarctica</option>
										<option>Antigua and Barbuda</option>
        							</select>
        						</div>
        						<div className="input_box">
        							<label>Address <span>*</span></label>
        							<input type="text" placeholder="Street address" />
        						</div>
        						<div className="input_box">
        							<input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
        						</div>
        						<div className="input_box">
        							<label>District<span>*</span></label>
        							<select className="select__option"> 
										<option>Select a country…</option>
										<option>Afghanistan</option>
										<option>American Samoa</option>
										<option>Anguilla</option>
										<option>American Samoa</option>
										<option>Antarctica</option>
										<option>Antigua and Barbuda</option>
        							</select>
        						</div>
								<div className="input_box">
									<label>Postcode / ZIP <span>*</span></label>
									<input type="text" />
								</div>
								<div className="margin_between">
									<div className="input_box space_between">
										<label>Phone <span>*</span></label>
										<input type="text" />
									</div>
									<div className="input_box space_between">
										<label>Email address <span>*</span></label>
										<input type="email" />
									</div>
								</div>
        					</div>
        				</div>
        			 */}
					</div>
        			  
            </>
        )
    }
}

const mapStateToProps = state => ({
	auth: state.auth,
	locale: state.locale
  });


  export default connect(
    mapStateToProps
  )(Address);
