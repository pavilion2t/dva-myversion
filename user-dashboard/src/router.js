import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Register from './routes/Register';
import Users from "./routes/Users.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/register" component={Register} />
      <Route path="/users" component={Users} />
    </Router>
  );
}

export default RouterConfig;
