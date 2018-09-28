
import gql from 'graphql-tag';

export const getBooksByUserQuery = gql`
query booksByUser($id: ID!){
    booksByUser(id: $id) {
      name
      books{
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
        }}
  }
  }
`


export const getBooksByUserOptions = {
  props: ({ data: { name, books, loading, error } }) => {
    if (loading) {
      return { loading };
    }

    if (error) {
      return { error };
    }

    return {
      loading,
      name,
      books,
    };
  }
}