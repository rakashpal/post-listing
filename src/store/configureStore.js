import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
     const middleware=[
        thunk
     ];
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );
}