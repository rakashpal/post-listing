import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';
import Layout from './Layout/Layout';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
      <Route path='/' component={Login} exact />
      <PrivateRoute exact path="/Dashboard" component={Dashboard} />
   </Switch>
   </Layout>
    </div>
  );
}

export default App;
