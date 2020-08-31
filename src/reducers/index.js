import { combineReducers } from "redux";
import numberReducer from './numberReducer';
import colorReducer from './colorReducer';

//Rassemblement de tous les reduceurs du projets
const rootReducer = combineReducers({
    numberReducer,
    colorReducer
});

export default rootReducer;