import React from 'react';
import ReactDOM from 'react-dom';
import BookApp from './components/BookApp';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
// import { withClientState } from 'apollo-link-state';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from 'apollo-link-context';
import { AUTH_TOKEN } from './constants';
import '../node_modules/grommet-css'
import './styles/App.css';

const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})


/* const defaults = {
  me: {
    __typename: 'User',
    name: '',
    id: ''
  },
  feed: {
    __typename: 'Books',
    books: [],
  }
}; */

/* const stateLink = withClientState({
  cache, */
/*   defaults,
  resolvers: {
    Query: {
      me: (_, { me }, { cache }) => {
        const me = cache.readQuery({ query: me })
        cache.writeData({
          ...
        });
      }
    },
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        cache.writeData({ data: { isConnected } });
        return null;
      }
    }
  }, 
}); */

const link = ApolloLink.from([authLink, httpLink]);

const client = new ApolloClient({
  link,
  cache
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <BookApp />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
