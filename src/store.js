import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { rootReducer  } from './reducers'

export default function configureStore(preloadedState) {
    const middlewares = [thunkMiddleware, logger];
    const middlewareEnhancer = applyMiddleware(...middlewares)
    const enhancers = [middlewareEnhancer];
    const composedEnchancers = compose(...enhancers);
    const store = createStore(rootReducer, preloadedState, composedEnchancers);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }

    return store;
}