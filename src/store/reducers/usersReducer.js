import * as actionTypes from '../actions/actionTypes';

const initialState ={
    users:[]
};

export default function usersReducer(state=initialState,action){
  
    switch(action.type){
      
        case actionTypes.FETCH_USERS_SUCCESS:
            const {payload:users}=action;
        return Object.assign([], state,{users});
    }
    return state;
}

