import { combineReducers } from "redux";
import kgReducer from "./kgReducer";
import cbmReducer from "./cbmReducer";

const rootReducer = combineReducers({
    kgReducer,
    cbmReducer
});

export default rootReducer;
