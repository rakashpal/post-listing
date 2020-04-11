import axios from 'axios';
import * as actionTypes from './actionTypes';
import {request,received,error}from './baseActions';
//import { authHeader } from '../../helper';

export const checkLogin=(data)=>dispatch=>{
// Axios Data
const axiosData = {
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/login`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data:data
  };

  return axios(axiosData)
    .then(response => {
        if(response.data.status==200){
          localStorage.setItem('user', JSON.stringify(response.data.response));
          dispatch(received(actionTypes.AUTH_UPDATE, {is_login:true}));
        }
        dispatch(received(actionTypes.POST_CHECK_CREDENTIAL, response.data));
    
    }
        )
    .catch(err => {
      console.log('AXIOS ERROR:', err.response); // eslint-disable-line no-console
   
     // dispatch(error(FETCH_COINS_ERROR));
    });
};

export const logout=()=>dispatch=>{
  localStorage.removeItem('user');
  dispatch(received(actionTypes.AUTH_UPDATE, {is_login:false}));

};


export const getUsers=(page)=>dispatch=>{
  // Axios Data
  const axiosData = {
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/dashboard?page=${page}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
  
    return axios(axiosData)
      .then(response => {
          
          dispatch(received(actionTypes.FETCH_USERS_SUCCESS, response.data.response));
      
      }
          )
      .catch(err => {
        console.log('AXIOS ERROR:', err.response); // eslint-disable-line no-console
     
       // dispatch(error(FETCH_COINS_ERROR));
      });
  };