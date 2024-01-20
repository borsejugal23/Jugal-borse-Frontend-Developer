
import { thunk } from "redux-thunk";
import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import { reducer as authReducer } from "./AuthReducer/reducer";
const rootReducer=combineReducers({authReducer});

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))