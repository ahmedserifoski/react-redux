import { combineReducers } from "redux";
import myFirstReducer from "./accountReducer";

const allReducersCombined = combineReducers({
    accountNr1: myFirstReducer,
});

export default allReducersCombined;
