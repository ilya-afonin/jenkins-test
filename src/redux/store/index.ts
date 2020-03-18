import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { useHttp } from "../../hooks/http.hook";

const middleware = applyMiddleware(thunk.withExtraArgument(useHttp));

const store = createStore(rootReducer, middleware);

export default store;
