import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {ConnectedRouter} from 'react-router-redux';
import createHistory from "history/createHashHistory";
import {configureStore} from "./core/configureStore";
import reducer from './core/reducer';
import {PageWrapper} from "./core/PageWrapper";

const history = createHistory();
const initialState = {};
const store = configureStore(initialState, history, reducer);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
           <PageWrapper/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
