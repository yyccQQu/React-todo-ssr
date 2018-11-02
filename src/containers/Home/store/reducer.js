
import {CHANGE_LIST} from './contants'

const defaultState = {
    newsList: [],
    name: "golang"
}


export default (state=defaultState, action) => {
    switch(action.type) {
        case CHANGE_LIST: 
            return {
                ...state,
                newsList: action.list
            }
       
        default: 
            return state;
    }

}


