import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';

import Home from '../pages/Home';
import User from '../pages/User';
import Jobs from '../pages/Jobs';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <div className="c-app c-default-layout">
            <div className="c-wrapper bg-white">
              <Header />

              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/user" exact component={User} />
                <Route path="/user/:id" exact component={User} />
                <Route path="/jobs/:user/:repo" exact component={Jobs} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
