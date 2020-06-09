import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';


const StripeButtonCheckout = ({ price, userid }) => {
 // console.log('userid', userid)
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_5iEPCvZdnIZc5YUkxII0CUSe001VELMgZq';

  const onToken = token => {
    const orderData = {
      userid: userid,
      order: JSON.stringify(token)
    }
    console.log(token);
    axios.post(`/api/sales`, orderData)
      .then(res => console.log('Success', res))
      .catch(err => console.log(err))

    //alert('Payment Succesful!');

   /* {
      "id": "tok_1GYUyXKQwvTAupBLqAPhVF7t",
      "object": "token",
      "card": {
        "id": "card_1GYUyVKQwvTAupBLE51TyZrs",
        "object": "card",
        "address_city": "Gaya",
        "address_country": "India",
        "address_line1": "Kharkhura",
        "address_line1_check": "pass",
        "address_line2": null,
        "address_state": "34",
        "address_zip": "823002",
        "address_zip_check": "pass",
        "brand": "Visa",
        "country": "US",
        "cvc_check": "pass",
        "dynamic_last4": null,
        "exp_month": 12,
        "exp_year": 2024,
        "funding": "credit",
        "last4": "4242",
        "metadata": {
        },
        "name": "Shakti Kumar",
        "tokenization_method": null
      },
      "client_ip": "47.9.222.187",
      "created": 1587032981,
      "email": "shakti.opensourcedeveloper@gmail.com",
      "livemode": false,
      "type": "card",
      "used": false
    } */
    
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Absas Furniture'
      billingAddress
      shippingAddress
      image='https://absas-osd.herokuapp.com/images/logo/4.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButtonCheckout;
