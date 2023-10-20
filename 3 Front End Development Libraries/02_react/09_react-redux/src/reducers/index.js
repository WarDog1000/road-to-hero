import {combineReducers} from "redux";
import contadorReducer from "./contador.reducer";
import { shoppingReducer } from "./shopping.reducers";
// import { CrudReducers } from "./crud.reducers";

const reducer = combineReducers({
  contador: contadorReducer,
  shopping: shoppingReducer,
  // crud: CrudReducers
});

export default reducer;
