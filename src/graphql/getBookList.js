import gql from 'graphql-tag';

export const getBookListQuery= gql`
  query {
    feed(orderBy: createdAt_DESC) {
      id
      title
      author
      description
      image
      createdAt
      postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
    }
  }
`