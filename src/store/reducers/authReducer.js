import * as actionTypes from '../actions/actionTypes';

const initialState ={
    is_login:false
};

export default function authReducer(state=initialState,action){
  
    switch(action.type){
      
        case actionTypes.AUTH_UPDATE:
            const {payload:is_login}=action;
          return is_login;
    }
    return state;
}