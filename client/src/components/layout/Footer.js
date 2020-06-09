import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Footer(props) {
    const [email, setEmail] = useState('');
    const newsletterHandler = e => {
        setEmail(e.target.value);
    }
    return (
        <div>
            <footer id="htc__footer">
            <div className="footer__container bg__cat--1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer">
                                <h2 className="title__line--2">ABOUT US</h2>
                                <div className="ft__details">
                                    <p>In 2019, we started Absas Furniture with a vision - to make a million homes beautiful. Back then, our catalogue featured just 15 designs.</p>
                                    <div className="ft__social__link">
                                        <ul className="social__link">
                                            <li><NavLink to="/"><i className="icon-social-twitter icons"></i></NavLink></li>

                                            <li><NavLink to="/"><i className="icon-social-instagram icons"></i></NavLink></li>

                                            <li><NavLink to="/"><i className="icon-social-facebook icons"></i></NavLink></li>

                                            <li><NavLink to="/"><i className="icon-social-linkedin icons"></i></NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12 xmt-40">
                            <div className="footer">
                                <h2 className="title__line--2">information</h2>
                                <div className="ft__inner">
                                    <ul className="ft__list">
                                        <li><NavLink to="/about">About us</NavLink></li>
                                        <li><NavLink to="/delivery-information">Delivery Information</NavLink></li>
                                        <li><NavLink to="/privacy-policy">Privacy & Policy</NavLink></li>
                                        <li><NavLink to="/terms-condition">Terms  & Condition</NavLink></li>
                                        <li><NavLink to="/faqs">FAQs</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12 xmt-40 smt-40">
                            <div className="footer">
                                <h2 className="title__line--2">my account</h2>
                                <div className="ft__inner">
                                    <ul className="ft__list">
                                        <li><NavLink to="/my-account">My Account</NavLink></li>
                                        <li><NavLink to="/cart">My Cart</NavLink></li>
                                        <li><NavLink to="/login">Login</NavLink></li>
                                        <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                                        <li><NavLink to="/checkout">Checkout</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-12 xmt-40 smt-40">
                            <div className="footer">
                                <h2 className="title__line--2">Our service</h2>
                                <div className="ft__inner">
                                    <ul className="ft__list">
                                        <li><NavLink to="/my-account">My Account</NavLink></li>
                                        <li><NavLink to="/cart">My Cart</NavLink></li>
                                        <li><NavLink to="/login">Login</NavLink></li>
                                        <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                                        <li><NavLink to="/checkout">Checkout</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 xmt-40 smt-40">
                            <div className="footer">
                                <h2 className="title__line--2">NEWSLETTER </h2>
                                <div className="ft__inner">
                                    <div className="news__input">
                                        <div id="mc_embed_signup">
                                            <form action="https://gmail.us18.list-manage.com/subscribe/post?u=0e88f68c9845def89da04a6a2&amp;id=832f262a1a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                                <div id="mc_embed_signup_scroll">
                                                    <input type="email" value={email} onChange={newsletterHandler} name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Your Mail*" />
                                                    <div className="send__btn">
                                                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="fr__btn" />
                                                    </div>

                                                    <div id="mce-responses" className="clear">
                                                        <div className="response" id="mce-error-response"></div>
                                                        <div className="response" id="mce-success-response"></div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="htc__copyright bg__cat--5">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="copyright__inner">
                                <p>Copyright© ABSAS Furniture 2020. All right reserved.</p>
                                <NavLink to="/"><img src="images/others/shape/paypol.png" alt="payment images" /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer
