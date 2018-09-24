import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Grommet, Box, App } from 'grommet';
import AppHeader from './AppHeader';
import HomeSection from './HomeSection';
import CollectionSection from './CollectionSection';
import LoginSection from './LoginSection';

class BookApp extends Component {
  render() {
    return (
      <Grommet>
        <App centered={true}>
          <Box full={true}>
            <AppHeader />
            <Switch>
              <Route exact path="/" component={HomeSection} />
              <Route exact path="/collection" component={CollectionSection} />
              <Route exact path="/login" component={LoginSection} />
            </Switch>
          </Box>
        </App>
      </Grommet>

    );
  }
}

export default BookApp;
