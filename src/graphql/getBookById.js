import gql from 'graphql-tag';

export const getBookByIdQuery = gql`
query book($id: ID!){
  book(id: $id) {
    id
    createdAt
    title
    author
    textSnippet
    description
    publishedDate
    publisher
    pageCount
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