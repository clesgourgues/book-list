import gql from 'graphql-tag';

export const getRestBookListQuery= gql`
  query search($: String, ){
    search @rest(type: Book, path: "") {
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

