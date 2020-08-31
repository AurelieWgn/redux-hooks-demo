import {ADD_ONE, DEL_ONE} from '../actions/actions-types';

const numberReducer = (state = 0, action) => {
    
    switch(action.type) {

        case ADD_ONE:
            return state + action.payload

        case DEL_ONE:
             return state - action.payload
        
        default:
            return state;
    }
}

export default numberReducer;