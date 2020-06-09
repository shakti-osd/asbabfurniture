import axios from 'axios';

import { GET_ERRORS } from './types';

// Contact Form
export const contactSubmit = (contactData, history) => dispatch => {
 // console.log('contactData', contactData);
  axios
    .post(`/api/forms/contact`, contactData)
    .then(res => history.push('/thank-you'))
    .catch(err => {
     
      if(err.response === undefined){
        dispatch({
          type: GET_ERRORS,
          payload: {server:'Server error'}
        })
      }else{
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      }
      
    })
};
