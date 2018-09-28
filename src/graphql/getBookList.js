import gql from 'graphql-tag';

export const getBookListQuery= gql`
  query {
    feed {
      id
      title
      author
      description
      image
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