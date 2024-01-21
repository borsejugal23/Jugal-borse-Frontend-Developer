import { thunk } from "redux-thunk";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as productReducer } from "./ProductListReducer/reducer";
const rootReducer = combineReducers({ authReducer, productReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
