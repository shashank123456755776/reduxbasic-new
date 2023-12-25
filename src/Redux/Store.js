import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "../Cakes/Reducer";
const store = createStore(reducer,applyMiddleware(logger))
export default store 
// middlwares mainly use to see the data in inspect as console
    