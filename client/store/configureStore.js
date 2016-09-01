import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {rootReducer} from '../reducers/index';

export default function configureStore(initialState) {
    const logger = createLogger({
        collapsed: true,
        predicate: () =>
        NODE_ENV === `development` // eslint-disable-line no-unused-vars
    });

    return createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

    // const middleware = applyMiddleware(thunkMiddleware, logger);
    //
    // return middleware(createStore)(rootReducer, initialState);
}
