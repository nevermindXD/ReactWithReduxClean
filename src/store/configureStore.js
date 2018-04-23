
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import customMiddleware from '../middleware';
import rootReducer from '../redux/reducers';


const INITIAL_STATE = {};
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = INITIAL_STATE, history ) {

    /**
     * sagaMiddleware - Makes redux-sagas work
     * routerMiddleware - Sync the location/url path to state
    // */
    const middlewares = [
        sagaMiddleware,
         ...customMiddleware
        // routerMiddleware(history)
    ];

    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
            typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                shouldHotReload: false,
            })
            : compose;

            /**
             *  rootReducer - receive all the reducers
             *  initialState of the store
             *  enhancers
             */
    const store = createStore(
        rootReducer(),
        initialState,
        composeEnhancers(...enhancers)
    );


    return store;
 }

export default configureStore;