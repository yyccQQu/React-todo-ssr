import { createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

const reducer = (state ={name: 'golang'}, action)=>{
    return state
}

//使每个用户的store都不一样
const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}


export default getStore;
