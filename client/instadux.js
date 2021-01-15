import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router'
import { Provider } from 'react-redux';
import store, { history } from './store';
import css from './styles/style.styl';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';


Sentry.init({
    dsn: "https://75889f5abb93433d8812bd5215b15be0@o505334.ingest.sentry.io/5593461",
    autoSessionTracking: true,
    integrations: [
        new Integrations.BrowserTracing(),
    ],
    tracesSampleRate: 1.0,
});

const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)


render(router, document.querySelector("#root"))