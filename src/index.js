import React from 'react';
import ReactDOM from 'react-dom';
import BookApp from './components/BookApp';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import '../node_modules/grommet-css'
import '../node_modules/grommet/scss/vanilla/index.scss';
import './styles/App.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BookApp />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
