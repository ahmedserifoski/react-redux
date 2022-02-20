import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux";
import allReducersCombined from "./reducers/index";

const myFristStore = createStore(
    allReducersCombined,
    {},
    applyMiddleware(thunk)
);

export default myFristStore;
