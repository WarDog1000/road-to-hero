import {combineReducers} from "redux";
import contadorReducer from "./contador.reducer";

const reducer = combineReducers({
  contador: contadorReducer
});

export default reducer;
