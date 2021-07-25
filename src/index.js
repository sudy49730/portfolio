import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";

import HomePage from './pages/HomePage/HomePage';
import { isDev } from './configurations/app.json';
import { name } from './configurations/content.json';

reactDom.render(
    <Router>
        <Switch>
            <Route path={isDev ? '/' : '/portfolio/'} component={HomePage} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

reactDom.render(
    name,
    document.getElementById('title')
);