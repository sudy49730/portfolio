import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";

import HomePage from './pages/HomePage/HomePage';

reactDom.render(
    <Router>
        <Switch>
            <Route path="/portfolio/" component={HomePage} />
        </Switch>
    </Router>,
    document.getElementById('root')
);