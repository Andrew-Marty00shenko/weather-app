import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import weatherReducer from './reducers/weather-reducer';
import selectedReducer from './reducers/selected-reducer';

const reducers = combineReducers({
    weatherReducer,
    selectedReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;