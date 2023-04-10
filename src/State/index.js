import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ConverterReducer } from "./ConverterReducer";
const RootReducer = combineReducers({
  ConverterReducer,
});
export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
