import gql from 'graphql-tag';

export const getUserNameQuery = gql`
  query {
    me {
      id
      name
    }
  }
  `