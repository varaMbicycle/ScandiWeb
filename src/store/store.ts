import {combineReducers, createStore} from "redux";
import {cartReducer} from "./Reducer";

export const store = createStore( combineReducers({cartReducer}))
