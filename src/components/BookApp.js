import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Grommet, App } from 'grommet';
import AppHeader from './AppHeader';
import SearchSection from './SearchSection';
import CollectionSection from './CollectionSection';
import LoginSection from './LoginSection';
import BookAloneSection from './BookAloneSection';

class BookApp extends Component {
  render() {
    return (
      <Grommet>
        <App centered={false}>
            <AppHeader />
            <Switch>
              <Route exact path="/" component={SearchSection} />
              <Route exact path="/collection" component={CollectionSection} />
              <Route exact path="/login" component={LoginSection} />
              <Route exact path="/:id" component={BookAloneSection} />
            </Switch>
        </App>
      </Grommet>

    );
  }
}

export default BookApp;
