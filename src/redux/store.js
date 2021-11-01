import { createStore, combineReducers } from "redux";
import managerReducer from "./reducer";
//import { composeWithDevTools } from "redux-devtools-extension";

const allReducers = combineReducers({managers: managerReducer});

const employeeStore = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default employeeStore;