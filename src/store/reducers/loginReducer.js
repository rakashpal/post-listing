import * as actionTypes from '../actions/actionTypes';

const initialState ={
    user:{}
};

export default function loginReducer(state=initialState,action){
  
    switch(action.type){
      
        case actionTypes.POST_CHECK_CREDENTIAL:
            const {payload:user}=action;
        return Object.assign([], state,{user});
    }
    return state;
}

