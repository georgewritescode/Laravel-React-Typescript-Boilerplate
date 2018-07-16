
import * as React from 'react';
import { hot } from 'react-hot-loader';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Page} from 'components/Page'

export const RouterComponent = hot(module)(() => (
    <Router>
      <Switch>
        <Route path="/" component={Page} />
      </Switch>
    </Router>
));
