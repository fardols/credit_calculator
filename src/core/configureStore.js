import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';   // для отображения изменения store в расширении redux-devtools браузера
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState, history, reducer) {

    const logger = createLogger({
        // options
    });
    const router = routerMiddleware(history);

    // let store = createStore(reducer, applyMiddleware(logger, router));   // упрошенная версия без обертки DevTools
    const store = createStore(reducer, initialState, composeWithDevTools(
        applyMiddleware(sagaMiddleware, router, thunk, logger)
        // logger must be the last middleware in chain, otherwise it will log thunk and promise, not actual actions (https://github.com/LogRocket/redux-logger)
        // в противном случае redux-logger будет показывать всякую промежеточную хрень
    ));

    store.runSaga = sagaMiddleware.run;

    store.injectedSagas = {
        ...[
        ]
    }


    return store;
}
