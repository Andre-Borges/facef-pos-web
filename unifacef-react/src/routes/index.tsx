import * as React from 'react';

import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { endpoints, loginEndpoints } from './endpoints';

import { Divider } from 'semantic-ui-react';
import MainMenu from '../components/main-menu';
import NotFound from '../containers/not-found';
import { isLoggedIn } from '../utils/auth.util';
import { observer } from 'mobx-react';

// @ts-ignore
@withRouter
@observer
export default class Routes extends React.Component {
  render() {
    return (
      <>
        {loginEndpoints.map((route, key) => (
          <Route key={key} {...route} />
        ))}
        {isLoggedIn() ? (
          <>
            <MainMenu />
            <Divider hidden={true}></Divider>
            <Switch>
              {endpoints.map((route, key) => (
                <Route key={key} {...route} />
              ))}
              <Route path="*" exact={true} render={(props) => <NotFound {...props} />} />
            </Switch>{' '}
          </>
        ) : (
          <Redirect to={{ pathname: 'login' }} />
        )}
      </>
    );
  }
}
