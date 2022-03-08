import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import User from '../pages/User';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

import { CContainer } from '@coreui/react';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <CContainer>
          <div className="c-app c-default-layout">
            <div className="c-wrapper">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/home" exact component={Home} />
                <Route path="/user" exact component={User} />
                <Route path="/user/:id" exact component={User} />
              </Switch>
            </div>
          </div>
        </CContainer>
      </BrowserRouter>
    </>
  );
}
