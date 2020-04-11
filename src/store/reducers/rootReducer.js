import {combineReducers} from 'redux';
import device from './deviceReducer';
import login from './loginReducer';
import auth from './authReducer';
import users from './usersReducer';
const rootReducer=combineReducers({
    device,
    login,
    auth,
    users
});

export default rootReducer;