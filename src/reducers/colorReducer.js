import {CHANGE_COLOR, SET_COLOR } from '../actions/actions-types';

const colorReducer = (state = {}, action) => {
    
    switch(action.type) {

        case CHANGE_COLOR:
            return {
                ...state,
                color:  action.payload
            }
        case SET_COLOR:
            return{
                ...state,
                color : action.payload
            }
     
        default:
            return state;
    }
}

export default colorReducer;