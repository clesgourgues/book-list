import gql from 'graphql-tag';

export const voteMutation = gql`
  mutation VoteMutation($bookId: ID!) {
    vote(bookId: $bookId) {
      id
      book {
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`
