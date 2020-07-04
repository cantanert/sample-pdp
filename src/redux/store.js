import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import {composeWithDevTools} from 'redux-devtools-extension';
import reducerCombining from "./reducers/reducerCombining";

const store = createStore(
    reducerCombining,
    {},
    composeWithDevTools(
        applyMiddleware(logger)
    )
);

export default store;